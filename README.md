# edge-model-catalog

A searchable catalog of small / edge AI models (roughly **≤ 4B parameters**),
organized by **use case** rather than by benchmark rank.

Every entry was verified against its primary source (the model card or the
official announcement) — including the honest caveats the source itself states.
Numbers in `caveats` / `hook` are provider-measured unless an entry says
otherwise (one entry, BotPsy-0.8B, was additionally verified hands-on).

> Status: seed data only. The site (Astro) comes later.

## Data

`data/models.yaml` — 40 entries (33 covered in depth, 7 card-read candidates).

### Schema

| field         | meaning                                                                 |
|---------------|-------------------------------------------------------------------------|
| `id`          | unique slug                                                              |
| `name`        | model name                                                               |
| `provider`    | author / organization                                                    |
| `url`         | primary source (Hugging Face model page, official post)                  |
| `params_b`    | parameter count in billions (approx.; omitted if unknown)                |
| `license`     | license of the weights                                                   |
| `license_note`| split-license or openness caveats (optional)                             |
| `base_model`  | base model if a fine-tune / derivative (omitted if trained from scratch) |
| `categories`  | use-case tags (vocabulary below)                                         |
| `modality`    | `text` / `image` / `audio` / `video` / `3d`                              |
| `released`    | first public release date (YYYY-MM-DD)                                   |
| `verified`    | date the primary source was last checked                                 |
| `status`      | `covered` = written up in depth / `candidate` = card-read, not yet covered |
| `hook`        | one line: what makes it interesting                                      |
| `caveats`     | honest limitations from the primary source (optional)                    |

### Category vocabulary

- `ocr`, `document`, `handwriting`, `field-extraction` — reading documents
- `speech-recognition`, `text-to-speech`, `voice-parts`, `voice-dialogue` — voice
- `3d-generation` — image/text to 3D
- `agent`, `tool-calling`, `decision`, `computer-use`, `code-search` — agent parts
- `embeddings`, `search` — retrieval
- `vision-language`, `robotics`, `accessibility`, `audio-classification`,
  `games`, `language`, `reasoning`, `code-generation`, `research` — other niches

## Planned site

Astro + this YAML as the data source (e.g. loaded via a content collection or
a plain import), with filtering by category / modality / license / size and
full-text search over `name`, `provider` and `hook`.
