#!/bin/sh
ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$ROOT" || exit 0

if [ ! -f setup/mods.lock.json ]; then
    echo "[sync] setup/mods.lock.json not found, skipping."
    exit 0
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

exit $RC
