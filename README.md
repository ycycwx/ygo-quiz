Yugioh Quiz (WIP)

## Getting Started

```bash
# Install dependencies
bun install

# Run the development server
bun dev
```

## Database

All external data are in the `db` folder which are downloaded from the following sources:

- [cards.cdb](https://github.com/mycard/ygopro-database/blob/master/locales/zh-CN/cards.cdb)
- [strings.conf](https://github.com/mycard/ygopro-database/blob/master/locales/zh-CN/strings.conf)
- [top.json](https://mycard.world/ygopro/arena/index.html#/cards)

```bash
# Update external data
bun run db
```
