#!/bin/sh
set -eu

ROOT_DIR=$(git rev-parse --show-toplevel)
DB_DIR="$ROOT_DIR/public/db"
CACHE_DIR="$ROOT_DIR/.cache/ygopro-database"

mkdir -p "$DB_DIR" "$ROOT_DIR/.cache"

if [ ! -d "$CACHE_DIR/.git" ]; then
  git clone --depth 1 https://github.com/mycard/ygopro-database.git "$CACHE_DIR" || {
    echo "Failed to clone ygopro-database" >&2
    exit 1
  }
else
  git -C "$CACHE_DIR" pull --ff-only || {
    echo "Failed to update ygopro-database" >&2
    exit 1
  }
fi

cp "$CACHE_DIR/locales/zh-CN/cards.cdb" "$DB_DIR/cards.cdb"
cp "$CACHE_DIR/locales/zh-CN/strings.conf" "$DB_DIR/strings.conf"

bun run "$ROOT_DIR/scripts/top.ts"
