# My Vite + React + TS Starter 🚀

[![CI/CD](https://github.com/harumaki1220/ts-react-starter/actions/workflows/cicd.yml/badge.svg)](https://github.com/harumaki1220/ts-react-starter/actions/workflows/cicd.yml)

Vite + TypeScript + Reactのスターターテンプレートです。
開発をすぐに始められるように、以下の基本的な設定が完了しています。

## ✨ 主な特徴 (Features)

- **開発環境**: Vite, React, TypeScript
- **コード品質**:
  - ESLint (Prettierとの連携設定済み)
  - Prettier
- **CI/CD**:
  - GitHub Actionsによる自動化
  - `test` -> `build` -> `deploy` の3段階パイプライン
  - GitHub Pagesへの自動デプロイ設定
- **スタイリング**: CSS Modules

## 🛠️ 使い方 (Available Scripts)

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロダクション用にプロジェクトをビルドします。
- `npm run lint`: ESLintでコードの静的解析を実行します。
- `npm run typecheck`: TypeScriptで型チェックのみを実行します。
- `npm run format`: Prettierを使ってプロジェクト全体のファイルを整形します。
- `npm run format:check`: 整形が必要なファイルがないかチェックします（CIで使用）。

## 🚀 プロジェクトの始め方 (Getting Started)

1.  このリポジトリのページで緑色の **"Use this template"** ボタンをクリックし、新しいリポジトリを作成します。
2.  作成したリポジトリをローカルにクローンします。
3.  ターミナルで `npm install` を実行して、必要なパッケージをインストールします。
4.  `npm run dev` で開発を開始しましょう！

---

## ⚠️ 重要：デプロイ設定の変更

このテンプレートはGitHub Pagesへのデプロイを前提としています。
新しいリポジトリで正しくデプロイするために、**必ず以下の設定を変更してください。**

### `vite.config.ts`
`base`の値を、あなたの新しいリポジトリ名に合わせて変更します。

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ↓↓↓ この行をあなたのリポジトリ名に変更！
  base: '/ts-react-starter/', 
})
```

例: 新しいリポジトリ名が my-cool-app の場合
```base: '/my-cool-app/',```
