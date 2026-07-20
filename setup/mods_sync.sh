#!/bin/sh
cat > .git/hooks/post-merge <<'EOF'
#!/bin/sh
sh "$(git rev-parse --show-toplevel)/setup/sync.sh"
EOF

cat > .git/hooks/post-checkout <<'EOF'
#!/bin/sh
[ "$3" = "1" ] || exit 0
sh "$(git rev-parse --show-toplevel)/setup/sync.sh"
EOF

chmod +x .git/hooks/post-merge .git/hooks/post-checkout

echo "Hooks installed"
sh setup/sync.sh
