#!/bin/sh
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT" || exit 1

sync_mods() {
    if [ ! -f setup/mods.lock.json ]; then
        echo "[sync] setup/mods.lock.json not found."
        return 1
    fi
    mkdir -p mods
    HAD_CF=0
    if [ -f minecraftinstance.json ]; then
        HAD_CF=1
        cp -f minecraftinstance.json setup/.mci.backup
    fi
    cp -f setup/mods.lock.json minecraftinstance.json
    echo "[sync] Running InstanceSync..."
    java -jar InstanceSync.jar
    RC=$?
    if [ "$HAD_CF" = "1" ]; then
        mv -f setup/.mci.backup minecraftinstance.json
    fi
    if ls setup/local-mods/*.jar >/dev/null 2>&1; then
        cp -f setup/local-mods/*.jar mods/ 2>/dev/null || true
        echo "[sync] Restored local mods."
    fi
    return $RC
}

if [ "$1" = "--sync" ]; then
    sync_mods
    exit $?
fi

if [ -d .git ]; then
    cat > .git/hooks/post-merge <<'EOF'
#!/bin/sh
sh "$(git rev-parse --show-toplevel)/setup/mods_sync.sh" --sync
EOF
    cat > .git/hooks/post-checkout <<'EOF'
#!/bin/sh
[ "$3" = "1" ] || exit 0
sh "$(git rev-parse --show-toplevel)/setup/mods_sync.sh" --sync
EOF
    chmod +x .git/hooks/post-merge .git/hooks/post-checkout
    echo "Hooks installed"
else
    echo "No .git (ZIP download): skipping hooks"
fi

sync_mods
