#!/bin/sh
set -eu

ROOT_DIR=$(git rev-parse --show-toplevel)
DB_DIR="$ROOT_DIR/public/db"
CACHE_ROOT="$ROOT_DIR/.cache"
CACHE_DIR="$CACHE_ROOT/ygopro-database"

mkdir -p "$DB_DIR" "$CACHE_ROOT"

if [ ! -d "$CACHE_DIR/.git" ]; then
    git clone --depth 1 https://github.com/mycard/ygopro-database.git "$CACHE_DIR"
else
    git -C "$CACHE_DIR" pull --ff-only || {
        echo "Warning: failed to update ygopro-database, using cached copy"
    }
fi

cp "$CACHE_DIR/locales/zh-CN/cards.cdb" "$DB_DIR/cards.cdb"
cp "$CACHE_DIR/locales/zh-CN/strings.conf" "$DB_DIR/strings.conf"

bun run "$ROOT_DIR/scripts/top.ts"
