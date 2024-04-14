# toshi00-portfolio

![CI](https://github.com/toshi-pono/toshi00-portfolio/workflows/CI/badge.svg)

![portfolio](https://github.com/toshi-pono/toshi00-portfolio/blob/main/public/works/portfolio.png)

## Overview

toshi00(とし) の制作物まとめサイトです。

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## Development

```sh
pnpm i
pnpm dev
```

## Tests

### lint

```sh
pnpm test
```

### e2e

```sh
pnpm exec playwright install
pnpm build
pnpm test:e2e
```

### urlが200を返すことを確認する

```sh
pnpm test:url
```

## Author

[twitter](https://twitter.com/toshi00_p)
