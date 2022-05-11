# Next.js, Typescript, Tailwind Starter

## Features

- Next.js 12 ⚡️
- Typescript ⌨️
- Tailwind 💨
- Sass 💅🏽

## Quick Start

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```
yarn create next-app -e https://github.com/Sanwar01/nextjs-tw-ts-starter
# or
npx create-next-app -e https://github.com/Sanwar01/nextjs-tw-ts-starter
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Documentation

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

### Directory Structure

- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles, utils, libs etc.

## Generate secret key

Run this in terminal

```
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import logo from '@/public/logo.png';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
