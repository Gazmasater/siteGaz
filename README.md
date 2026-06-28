# Gazmaster site

Исходники сайта лежат в `/root/project/site-src`.
Текущая статическая версия, которую отдает nginx, лежит в `/var/www/remontkotlov48`.

Обычный порядок работы:

```bash
cd /root/project/site-src
npm install
npm run dev
```

После правок собрать и переложить статический сайт в nginx docroot:

```bash
cd /root/project/site-src
npm run deploy:static
```

Команда `deploy:static` запускает `nuxt generate` и копирует результат из `.output/public/` в `/var/www/remontkotlov48/`.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
