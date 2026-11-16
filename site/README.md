# edge-model-catalog — site (Astro)

最小構成の静的カタログサイト。データは `../data/models.yaml` をビルド時に読み込む（コピー・改変なし）。

## 開発・確認

```bash
npm install
npm run dev      # http://localhost:4321/edge-model-catalog/
npm run build    # dist/ に静的出力
npm run preview  # ビルド済み成果物の確認
```

## デプロイ想定（未決定・未実施）

- `astro.config.mjs` は Cloudflare Pages（GitHub連携）＋独自ドメイン https://llm-catalog.fuwasegu.com 想定（ルート配信のため `base` なし）で設定済み。
- **GitHub への push は承認待ち。**  push しないこと。
- デプロイ先・base の変更は `astro.config.mjs` で行う。

## 注意

- fuwasegu 名義のプロジェクト。note（不破エンヂニヤリング）のブランド・リンク・文言は混ぜない。
- アクセス計測は Cloudflare Web Analytics（`index.astro` の head に beacon を埋め込み済み、2026-11-16）。
