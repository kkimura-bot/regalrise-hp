# RegalRise HP v3 — 追加画像設計指示書

**案件**: RegalRise eスポーツチーム HP v3 追加画像  
**モード**: 情熱（PASSION）  
**作成日**: 2026-06-01  
**担当**: RENDER  
**ステータス**: GEMINI_API_KEY 未設定 / .env ファイル未存在 → フォールバック出力。鍵が揃い次第、下記仕様で即時実行可能。

---

## 共通世界観（全6枚に適用）

| 項目 | 仕様 |
|---|---|
| カラーパレット | 黒 `#0A0A0A` × クリムゾンレッド `#FF1E1E` |
| スタイル | 写真リアリスティック（アニメ・イラスト・ゲームUI的な見た目 禁止） |
| トーン | ダーク・シネマティック / 映画ポスター質感 |
| ライティング | 劇的。赤・オレンジのアンビエントライト + ボリューメトリックフォグ |
| 人物 | 不可（personGeneration: dont_allow） |
| 品質 | 8K quality / photorealistic / high contrast |
| ファイル形式 | PNG |
| 生成モデル | imagen-3.0-generate-001 |
| API エンドポイント | `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict` |

---

## 画像1: `games_valorant.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | games_valorant.png |
| 用途 | VALORANT ゲームセクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | タクティカルFPS / マップ・HUD的な雰囲気 |

**生成プロンプト（英語）:**
```
Dark tactical esports environment, multiple glowing monitors displaying tactical map overlays and HUD elements in crimson red, dark military-style space with red lighting accents, professional esports setup for tactical FPS gaming, no people visible, cinematic atmosphere, volumetric red lighting, photorealistic, high contrast, 8K
```

**構図メモ:**
- 複数モニターがクリムゾンレッドで輝く
- タクティカルマップ・HUD要素をモニターに映す
- ミリタリースタイルの暗いオペレーションルーム感
- 「戦術・知性・緊張感」を一枚で語る

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Dark tactical esports environment, multiple glowing monitors displaying tactical map overlays and HUD elements in crimson red, dark military-style space with red lighting accents, professional esports setup for tactical FPS gaming, no people visible, cinematic atmosphere, volumetric red lighting, photorealistic, high contrast, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像2: `games_sf6.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | games_sf6.png |
| 用途 | Street Fighter 6 ゲームセクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | 格闘ゲーム / 一対一の対決 / ステージの緊張感 |

**生成プロンプト（英語）:**
```
Dark dramatic fighting game arena, a single spotlight from above illuminating an empty fighting stage, red and orange rim lighting casting long shadows, cinematic film noir style atmosphere, no people visible, dramatic tension, photorealistic, high contrast, 8K
```

**構図メモ:**
- 中央：空の格闘ステージにスポットライトが一本落ちる
- 赤・オレンジのリムライトが長い影を作る
- フィルムノワール的な劇的コントラスト
- 「次に立つのはお前だ」という空白の緊張感

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Dark dramatic fighting game arena, a single spotlight from above illuminating an empty fighting stage, red and orange rim lighting casting long shadows, cinematic film noir style atmosphere, no people visible, dramatic tension, photorealistic, high contrast, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像3: `games_fortnite.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | games_fortnite.png |
| 用途 | FORTNITE ゲームセクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | バトルロイヤル / ストーム / 圧倒的スケール感 |

**生成プロンプト（英語）:**
```
Dark storm clouds gathering over a battle royale landscape at night, dramatic red lightning illuminating dark terrain from above, apocalyptic cinematic atmosphere, no people visible, epic scale environment, photorealistic, deep blacks and crimson highlights, 8K
```

**構図メモ:**
- 頭上に広がる暗黒のストーム雲
- 赤い稲妻が暗い地形を上から照らす
- 黙示録的・映画的スケール感
- バトルロイヤルの「生き残れ」という世界観を地形だけで語る

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Dark storm clouds gathering over a battle royale landscape at night, dramatic red lightning illuminating dark terrain from above, apocalyptic cinematic atmosphere, no people visible, epic scale environment, photorealistic, deep blacks and crimson highlights, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像4: `games_r6.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | games_r6.png |
| 用途 | Rainbow Six Siege ゲームセクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | タクティカルオペレーション / 監視・インテリジェンス |

**生成プロンプト（英語）:**
```
Dark tactical operations room with glowing red monitors displaying surveillance feeds and building blueprints, dramatic red ambient lighting, no people visible, military intelligence atmosphere, cinematic composition, photorealistic, high contrast, 8K
```

**構図メモ:**
- 監視フィードと建物の設計図がモニターに映る
- 赤いアンビエント照明が全体を支配
- ミリタリーインテリジェンスの雰囲気
- 画像1（VALORANT）との差別化：こちらは「監視・情報戦」のテイスト

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Dark tactical operations room with glowing red monitors displaying surveillance feeds and building blueprints, dramatic red ambient lighting, no people visible, military intelligence atmosphere, cinematic composition, photorealistic, high contrast, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像5: `recruit_bg.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | recruit_bg.png |
| 用途 | RECRUIT セクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | 才能が主役になる瞬間 / 空のステージ / 「ここに立て」 |

**生成プロンプト（英語）:**
```
Empty dark esports arena stage seen from far away, single red spotlight beam illuminating center stage, rows of dark empty seats in foreground, massive screens glowing with red light, smoke machines creating atmosphere, cinematic wide shot, no people, photorealistic, intense contrast, 8K
```

**構図メモ:**
- 遠くに見えるステージの中央だけが赤いスポットライトで照らされる
- 前景：暗い空席の列（対比として使う）
- 巨大スクリーンが赤く輝く
- 「誰もいない舞台」が「次に立つ者を待っている」という空気感
- RECRUIT コピー（「ここが主人公の場所だ」等）と呼応する構図

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Empty dark esports arena stage seen from far away, single red spotlight beam illuminating center stage, rows of dark empty seats in foreground, massive screens glowing with red light, smoke machines creating atmosphere, cinematic wide shot, no people, photorealistic, intense contrast, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像6: `studio_bg.png` (16:9)

| 項目 | 仕様 |
|---|---|
| ファイル名 | studio_bg.png |
| 用途 | スタジオ・施設セクション背景 |
| アスペクト比 | 16:9 |
| モチーフ | プロスタジオの設備感 / RGB環境 / ブロードキャスト |

**生成プロンプト（英語）:**
```
Professional esports studio interior at night, rows of high-end gaming PCs with red RGB backlighting, dark walls with subtle red accent lighting, broadcast equipment visible, professional streaming setup, no people visible, cinematic atmosphere, photorealistic, deep blacks with red highlights, 8K
```

**構図メモ:**
- ハイエンドPCが並ぶ列（赤いRGBバックライト）
- 放送機材・配信機材が見える
- 暗い壁に赤いアクセント照明がさりげなく
- 「ここで戦える」「プロと同じ環境だ」という説得力

**Imagen APIパラメータ:**
```json
{
  "instances": [{"prompt": "Professional esports studio interior at night, rows of high-end gaming PCs with red RGB backlighting, dark walls with subtle red accent lighting, broadcast equipment visible, professional streaming setup, no people visible, cinematic atmosphere, photorealistic, deep blacks with red highlights, 8K"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 一括生成 Python スクリプト（鍵が揃ったら即実行）

```python
#!/usr/bin/env python3
"""
RegalRise HP v3 — 追加画像一括生成スクリプト
実行前に GEMINI_API_KEY 環境変数をセットすること:
  export GEMINI_API_KEY="your_key_here"
  python3 generate_v3.py
"""

import os
import json
import base64
import requests
from pathlib import Path

API_KEY = os.environ.get("GEMINI_API_KEY")
BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict"
OUTPUT_DIR = Path("/Users/koyakimura/projects/saikyo-design-team/outputs/製作中RiseHP/20260601_RegalRise_HP_v3/assets/images")

IMAGES = [
    {
        "filename": "games_valorant.png",
        "prompt": "Dark tactical esports environment, multiple glowing monitors displaying tactical map overlays and HUD elements in crimson red, dark military-style space with red lighting accents, professional esports setup for tactical FPS gaming, no people visible, cinematic atmosphere, volumetric red lighting, photorealistic, high contrast, 8K",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "games_sf6.png",
        "prompt": "Dark dramatic fighting game arena, a single spotlight from above illuminating an empty fighting stage, red and orange rim lighting casting long shadows, cinematic film noir style atmosphere, no people visible, dramatic tension, photorealistic, high contrast, 8K",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "games_fortnite.png",
        "prompt": "Dark storm clouds gathering over a battle royale landscape at night, dramatic red lightning illuminating dark terrain from above, apocalyptic cinematic atmosphere, no people visible, epic scale environment, photorealistic, deep blacks and crimson highlights, 8K",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "games_r6.png",
        "prompt": "Dark tactical operations room with glowing red monitors displaying surveillance feeds and building blueprints, dramatic red ambient lighting, no people visible, military intelligence atmosphere, cinematic composition, photorealistic, high contrast, 8K",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "recruit_bg.png",
        "prompt": "Empty dark esports arena stage seen from far away, single red spotlight beam illuminating center stage, rows of dark empty seats in foreground, massive screens glowing with red light, smoke machines creating atmosphere, cinematic wide shot, no people, photorealistic, intense contrast, 8K",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "studio_bg.png",
        "prompt": "Professional esports studio interior at night, rows of high-end gaming PCs with red RGB backlighting, dark walls with subtle red accent lighting, broadcast equipment visible, professional streaming setup, no people visible, cinematic atmosphere, photorealistic, deep blacks with red highlights, 8K",
        "aspect_ratio": "16:9"
    },
]

def generate_image(image_spec: dict) -> bool:
    print(f"Generating: {image_spec['filename']} ...")
    payload = {
        "instances": [{"prompt": image_spec["prompt"]}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": image_spec["aspect_ratio"],
            "safetyFilterLevel": "block_only_high",
            "personGeneration": "dont_allow"
        }
    }
    try:
        response = requests.post(
            f"{BASE_URL}?key={API_KEY}",
            headers={"Content-Type": "application/json"},
            json=payload,
            timeout=120
        )
        response.raise_for_status()
        data = response.json()

        b64 = data["predictions"][0]["bytesBase64Encoded"]
        img_bytes = base64.b64decode(b64)
        out_path = OUTPUT_DIR / image_spec["filename"]
        out_path.write_bytes(img_bytes)
        print(f"  SAVED: {out_path}")
        return True
    except Exception as e:
        print(f"  ERROR: {image_spec['filename']} — {e}")
        return False

if __name__ == "__main__":
    if not API_KEY:
        print("ERROR: GEMINI_API_KEY が未設定です")
        exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    for spec in IMAGES:
        success = generate_image(spec)
        results.append({"filename": spec["filename"], "success": success})

    print("\n--- 生成結果 ---")
    for r in results:
        status = "OK" if r["success"] else "FAIL"
        print(f"  [{status}] {r['filename']}")
```

---

## 生成優先順位

1. `recruit_bg.png` — 「才能が主役になる瞬間」。感情インパクト最大。RECRUITセクションの核心
2. `studio_bg.png` — 施設の説得力。「本物のプロ環境」を視覚証明
3. `games_valorant.png` — タクティカルFPS世界観の代表として最重要ゲーム
4. `games_sf6.png` — 格闘ゲーム独自の「一対一」緊張感
5. `games_r6.png` — タクティカル系2枚目（VALORANTとの差別化を意識）
6. `games_fortnite.png` — バトルロイヤル / スケール感で締める

---

## ブランド整合チェック

| 確認項目 | 判定 |
|---|---|
| モード：情熱（PASSION）に準拠 | OK — 黒×赤の強コントラスト、映画的ライティング |
| ブランドカラー（`#0A0A0A` × `#FF1E1E`）が軸 | OK — 全プロンプトに crimson red / deep black を明示 |
| 人物なし（Imagen personGeneration: dont_allow） | OK — no people visible を全プロンプトに記載 |
| 写真リアリスティック（アニメ・イラスト禁止） | OK — photorealistic を全プロンプトに記載 |
| v2 指示書との世界観統一 | OK — 同一の共通世界観を継承・適用 |
| 6枚間の差別化 | OK — 各ゲームのコアアイデンティティを構図で区別 |

---

## 参考方向性（v2 指示書より継承）

- **映画**: Cyberpunk 2077 公式トレーラー / Call of Duty シネマティック / John Wick のネオン暗部
- **色調**: Akira / Mad Max: Fury Road の炎 / クリムゾンレッドのボリューメトリック
- **NGライン**: ゲームのスクリーンショット的UIっぽさ / ストック写真的な明るさ / アニメ調 / ゲームイラスト調

---

*本ファイルは RENDER が GEMINI_API_KEY 未設定時のフォールバック出力として作成。*
*上記 Python スクリプトを実行環境で `export GEMINI_API_KEY="<key>"` した後に実行すれば6枚を一括生成できる。*
*出力先: `/Users/koyakimura/projects/saikyo-design-team/outputs/製作中RiseHP/20260601_RegalRise_HP_v3/assets/images/`*
