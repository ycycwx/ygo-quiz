#/bin/sh

ROOT_DIR=$(git rev-parse --show-toplevel)
PATH_DIR=$ROOT_DIR/public/db/

if [ ! -d $PATH_DIR ]; then
    mkdir -p $PATH_DIR
fi

# TODO: Check hash of the files to see if they are up to date
# Remove old files
rm $PATH_DIR/*

echo "Start downloading database files"
# Download the latest database files
wget -P $PATH_DIR https://raw.githubusercontent.com/mycard/ygopro-database/master/locales/zh-CN/cards.cdb
wget -P $PATH_DIR https://raw.githubusercontent.com/mycard/ygopro-database/master/locales/zh-CN/strings.conf
echo "Download database files done"

# Download hot cards
echo "Start downloading hot cards"
bun run $ROOT_DIR/scripts/top.ts
echo "Download hot cards done"
