# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## other memo

### astro 近況

気になった点だけ

- componenベースでのテスト機能の提供がない

  - ゆえにstorybookが使えない
  - container APIが2024年にくれば解決するかも？

- 参考リンク
  - [Astro ゆく年くる年](https://zenn.dev/morinokami/articles/astro-2023-2024)

### astro 環境構築

参考URL

- [全般](https://zenn.dev/siakas/scraps/97df23c5d2a711)
  - prettier
  - eslint
- [import path](https://docs.astro.build/ja/guides/typescript/)
- [integrations](https://astro.build/integrations/)
  - 公式紹介があるthird party

### npm corepack

利用者がグローバルに corepack をインストールしていて、かつプロジェクト側で package.json にパッケージマネージャと利用バージョンを指定しておけば、指定したパッケージマネージャを自動的に使わせたり、他のパッケージマネージャを使えなくしたりできる。

[link](https://zenn.dev/teppeis/articles/2021-05-corepack)

導入方法

```cmd
corepack enable npm
```

```json
{
  "packageManager": "npm@10.2.5"
}
```

### cloudflare

- 下記サイトを用いてcloudflare pagesにデプロイ
  - [参考記事リンク](https://zenn.dev/stripe/books/workshop-astro-cloudflare-pages/viewer/step2)
- web analyticsもワンボタンで設定可能。便利。
- github actionsを用いて自動デプロイ
  - cloudflare pagesからも設定可能

## TODO

- [x] chapter 0
- [x] chapter 1
- [x] chapter 2
- [x] chapter 3
- [x] chapter 4
- [x] chapter 5
- [x] chapter 6
