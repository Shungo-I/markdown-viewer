# Markdown Viewer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🛠 開発環境

- **Node.js**: 20.x
- **Next.js**: 15.x
- **TypeScript**: 5.x
- **Linter**: Biome

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🧹 Code Quality

このプロジェクトでは、コード品質を保つために以下のツールを使用しています：

### Linting & Formatting

```bash
# Biome でのLint実行
npm run lint:biome

# Biome でのFormat実行
npm run format

# 全体チェック（Lint + Format）
npm run check

# CI用チェック（修正なし）
npm run check:ci

# TypeScript型チェック
npm run type-check


```

## 🔄 GitHub Actions

このプロジェクトでは以下のGitHub Actionsワークフローが設定されています：

### 🔍 CI Workflow (`ci.yml`)
- **Lint & Type Check**: コード品質チェック
- **Build**: Next.jsプロジェクトのビルド確認
- **Trigger**: `main`, `develop`ブランチへのpush/PR時

### 📏 PR Check Workflow (`pr-check.yml`)
- **PR Size Check**: PRサイズの自動チェック
- **Auto Comment**: PRに品質レポートを自動投稿
- **Trigger**: PR作成/更新時

### 🎯 Lint Workflow (`lint.yml`)
- **Comprehensive Linting**: 全面的なLintチェック
- **Multiple Tools**: Biome, TypeScript
- **Trigger**: `main`, `develop`ブランチへのpush/PR時

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
