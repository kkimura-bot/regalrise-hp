# RegalRise HP v2 — 画像設計指示書

**案件**: RegalRise eスポーツチーム HP v2  
**モード**: 情熱（PASSION）  
**作成日**: 2026-06-01  
**担当**: RENDER  
**ステータス**: GEMINI_API_KEY 未設定のため生成待機中。本ファイルに生成仕様を全記録。鍵が揃い次第、下記仕様で即時実行可能。

---

## 共通世界観（全8枚に適用）

| 項目 | 仕様 |
|---|---|
| カラーパレット | 黒 `#0A0A0A` × クリムゾンレッド `#FF1E1E` × ディープオレンジ（アンビエント） |
| スタイル | 写真リアリスティック（アニメ・イラスト禁止） |
| トーン | ダーク・シネマティック / 映画ポスター / MVのワンシーン |
| ライティング | 劇的。赤・オレンジのアンビエントライト + ボリューメトリックフォグ |
| 人物 | 顔を映さない（シルエット・後ろ姿・下半身・手元のみ） |
| 品質 | 8K quality / photorealistic / film grain texture / high contrast |
| ファイル形式 | JPG、品質最高 |
| 生成モデル | imagen-3.0-generate-001 |

---

## 画像1: `hero_bg.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | hero_bg.jpg |
| 用途 | index.html ヒーローセクション背景 |
| サイズ | 1920 × 1080px |
| アスペクト比 | 16:9 |

**生成プロンプト（英語）:**
```
Cinematic dark gaming atmosphere, professional esports tournament venue at night, dramatic red and orange rim lighting casting long shadows on a stage, rows of dark gaming monitors with subtle red glow, volumetric fog and smoke drifting through deep shadows, top-down diagonal perspective, ultra-wide cinematic aspect, no people visible, deep black foreground that fades to glowing red in the distance, photorealistic, high contrast, film grain texture, 8K quality
```

**構図メモ:**
- 手前：暗闇の黒でクラッシュ
- 奥：赤いグローが広がる
- 斜め上から見下ろすアングル
- モニターの赤い残光が霧に溶ける

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像2: `community_hero.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | community_hero.jpg |
| 用途 | community.html ヒーローセクション背景 |
| サイズ | 1920 × 1080px |
| アスペクト比 | 16:9 |

**生成プロンプト（英語）:**
```
Dark underground gaming lounge with multiple screens glowing red and orange, silhouettes of gamers gathered around screens, dramatic back-lighting creating haloed figures against deep darkness, atmospheric fog machine smoke, sense of community and gathering, cinematic color grade with crushed blacks and red highlights, no visible faces, photorealistic, high contrast film noir style, 8K quality
```

**構図メモ:**
- 画面の光が唯一の光源
- 人のシルエットが逆光で浮かぶ
- 「集まる場所」の温度感を持たせる
- 孤独から帰属へ、の転換を画一枚で語る

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像3: `ambassador_hero.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | ambassador_hero.jpg |
| 用途 | ambassador.html ヒーローセクション背景 |
| サイズ | 1920 × 1080px |
| アスペクト比 | 16:9 |

**生成プロンプト（英語）:**
```
Single dramatic silhouette of a person standing alone center stage at a dark esports arena, arms slightly raised, bright red spotlight from directly above creating a halo of crimson light on the floor around them, deep darkness surrounding, sense of leadership and purpose, smoke and atmospheric haze, cinematic wide shot, photorealistic, intense contrast, 8K quality
```

**構図メモ:**
- 舞台の中央に一人立つシルエット
- 真上からの赤いスポットライト（神から降りる光）
- 「コミュニティの顔に、なれ。」のコピーと呼応する構図
- 周囲の暗闇が孤高さを際立てる

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "16:9",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像4: `team_visual.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | team_visual.jpg |
| 用途 | index.html チームビジュアル帯（横長パノラマ） |
| サイズ | 1920 × 600px |
| アスペクト比 | 16:5（超横長） |

**生成プロンプト（英語）:**
```
Wide panoramic shot of a professional esports team from behind, five silhouettes standing in a line looking toward a massive glowing screen displaying tournament bracket, dramatic backlit scene with deep red and gold rim lighting outlining their figures, cinematic ultra-wide composition, heavy vignette on edges, no faces visible, intense atmosphere, photorealistic, 8K quality
```

**構図メモ:**
- 5人のシルエットが横一列（左右に空間を持たせる）
- 巨大スクリーンが彼らを後光のように照らす
- 端はビネットで暗く締める
- テキストオーバーレイ想定のため中央上部に余白確保

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "3:1",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像5: `player_1.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | player_1.jpg |
| 用途 | メンバーカード1（縦長） |
| サイズ | 800 × 1000px |
| アスペクト比 | 4:5（縦長ポートレート比） |

**生成プロンプト（英語）:**
```
Dark moody portrait of a gamer from chest down, wearing dark gaming jersey with subtle red accent, hands resting on gaming mouse and keyboard, dramatic side lighting casting sharp shadows, deep black background with faint red glow from monitor, cinematic close-up, no face visible, photorealistic, high contrast, film grain, 8K quality
```

**構図メモ:**
- 胸から下のみ、顔は絶対に入れない
- 利き手がマウスに乗る「戦闘準備」のポーズ
- ジャージの赤アクセントがブランドカラーと連動
- モニターの赤グローが顔の下部を朧げに照らす（上半身は暗くする）

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "4:5",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像6: `player_2.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | player_2.jpg |
| 用途 | メンバーカード2（正方形） |
| サイズ | 800 × 800px |
| アスペクト比 | 1:1 |

**生成プロンプト（英語）:**
```
Close-up of a gaming setup from above at 45 degree angle, mechanical keyboard with subtle red backlighting, gaming mouse, dark desk surface, a hand reaching for the mouse with determination, dramatic overhead studio lighting, deep shadows, cinematic color grade, photorealistic, 8K quality
```

**構図メモ:**
- 俯瞰45度のフラットレイ的アングル
- 「手」がフレームの主役
- キーボードの赤バックライトが唯一の光源
- 暗い机面が黒を引き締める

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "1:1",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像7: `player_3.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | player_3.jpg |
| 用途 | メンバーカード3（正方形） |
| サイズ | 800 × 800px |
| アスペクト比 | 1:1 |

**生成プロンプト（英語）:**
```
Gaming streamer setup in darkness, RGB monitor glow illuminating a person's lower face and neck from below in deep red, microphone arm visible, dark room with only screen light, broadcasting atmosphere, no upper face visible, cinematic portrait, photorealistic, high contrast, 8K quality
```

**構図メモ:**
- 顎から下のみ見える（額・目・鼻は暗闇に溶ける）
- 赤いモニター光が下から照らす（ホラー的ではなく映画的に）
- マイクアームが構図の縦軸に
- 「発信者」のムードを持たせる

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "1:1",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## 画像8: `tournament_action.jpg`

| 項目 | 仕様 |
|---|---|
| ファイル名 | tournament_action.jpg |
| 用途 | 大会実績セクション背景（横長） |
| サイズ | 1920 × 800px |
| アスペクト比 | 12:5（横長ワイド） |

**生成プロンプト（英語）:**
```
Wide shot of an esports tournament venue from audience perspective, massive main stage with red and white dramatic lighting, large brackets and scores displayed on screens, silhouettes of spectators in foreground watching players on stage, smoke machines creating atmosphere, cinematic ultra-wide composition, photorealistic, deep blacks with red highlights, 8K quality
```

**構図メモ:**
- 前景：観客のシルエット（暗め）
- 中景：スコアボード・ブラケットが光る
- 奥：メインステージの赤い光
- 「8回の大会、88名が戦った」の数字が乗ることを想定した横長背景

**Imagen APIパラメータ（参考）:**
```json
{
  "instances": [{"prompt": "<上記プロンプト>"}],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "3:1",
    "safetyFilterLevel": "block_only_high",
    "personGeneration": "dont_allow"
  }
}
```

---

## API実行スクリプト（鍵が揃ったら即実行）

```python
#!/usr/bin/env python3
"""
RegalRise HP v2 — 画像一括生成スクリプト
GEMINI_API_KEY 環境変数をセットしてから実行すること
"""

import os
import json
import base64
import requests
from pathlib import Path

API_KEY = os.environ.get("GEMINI_API_KEY")
BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict"
OUTPUT_DIR = Path("/Users/koyakimura/projects/saikyo-design-team/outputs/製作中RiseHP/20260601_RegalRise_HP_v2/assets/images")

IMAGES = [
    {
        "filename": "hero_bg.jpg",
        "prompt": "Cinematic dark gaming atmosphere, professional esports tournament venue at night, dramatic red and orange rim lighting casting long shadows on a stage, rows of dark gaming monitors with subtle red glow, volumetric fog and smoke drifting through deep shadows, top-down diagonal perspective, ultra-wide cinematic aspect, no people visible, deep black foreground that fades to glowing red in the distance, photorealistic, high contrast, film grain texture, 8K quality",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "community_hero.jpg",
        "prompt": "Dark underground gaming lounge with multiple screens glowing red and orange, silhouettes of gamers gathered around screens, dramatic back-lighting creating haloed figures against deep darkness, atmospheric fog machine smoke, sense of community and gathering, cinematic color grade with crushed blacks and red highlights, no visible faces, photorealistic, high contrast film noir style, 8K quality",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "ambassador_hero.jpg",
        "prompt": "Single dramatic silhouette of a person standing alone center stage at a dark esports arena, arms slightly raised, bright red spotlight from directly above creating a halo of crimson light on the floor around them, deep darkness surrounding, sense of leadership and purpose, smoke and atmospheric haze, cinematic wide shot, photorealistic, intense contrast, 8K quality",
        "aspect_ratio": "16:9"
    },
    {
        "filename": "team_visual.jpg",
        "prompt": "Wide panoramic shot of a professional esports team from behind, five silhouettes standing in a line looking toward a massive glowing screen displaying tournament bracket, dramatic backlit scene with deep red and gold rim lighting outlining their figures, cinematic ultra-wide composition, heavy vignette on edges, no faces visible, intense atmosphere, photorealistic, 8K quality",
        "aspect_ratio": "3:1"
    },
    {
        "filename": "player_1.jpg",
        "prompt": "Dark moody portrait of a gamer from chest down, wearing dark gaming jersey with subtle red accent, hands resting on gaming mouse and keyboard, dramatic side lighting casting sharp shadows, deep black background with faint red glow from monitor, cinematic close-up, no face visible, photorealistic, high contrast, film grain, 8K quality",
        "aspect_ratio": "4:5"
    },
    {
        "filename": "player_2.jpg",
        "prompt": "Close-up of a gaming setup from above at 45 degree angle, mechanical keyboard with subtle red backlighting, gaming mouse, dark desk surface, a hand reaching for the mouse with determination, dramatic overhead studio lighting, deep shadows, cinematic color grade, photorealistic, 8K quality",
        "aspect_ratio": "1:1"
    },
    {
        "filename": "player_3.jpg",
        "prompt": "Gaming streamer setup in darkness, RGB monitor glow illuminating a person's lower face and neck from below in deep red, microphone arm visible, dark room with only screen light, broadcasting atmosphere, no upper face visible, cinematic portrait, photorealistic, high contrast, 8K quality",
        "aspect_ratio": "1:1"
    },
    {
        "filename": "tournament_action.jpg",
        "prompt": "Wide shot of an esports tournament venue from audience perspective, massive main stage with red and white dramatic lighting, large brackets and scores displayed on screens, silhouettes of spectators in foreground watching players on stage, smoke machines creating atmosphere, cinematic ultra-wide composition, photorealistic, deep blacks with red highlights, 8K quality",
        "aspect_ratio": "3:1"
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
        
        # Base64デコードして保存
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

1. `hero_bg.jpg` — トップのファーストビュー。最重要
2. `ambassador_hero.jpg` — 「一人が舞台に立つ」構図。感情インパクト最大
3. `community_hero.jpg` — コミュニティの集まりを象徴
4. `tournament_action.jpg` — 大会実績の視覚的証明
5. `team_visual.jpg` — パノラマ帯
6. `player_1.jpg` / `player_2.jpg` / `player_3.jpg` — メンバーカード

---

## 参考方向性（スタイル感の言語化）

- **映画**: Cyberpunk 2077 公式トレーラー / Arcane ビジュアル / Call of Duty シネマティック
- **色調**: Akira / John Wickのネオン暗部 / Mad Max: Fury Road の炎
- **NGライン**: ゲームのスクリーンショット的なUIっぽさ / ストック写真っぽい明るさ / アニメ調 / ゲームイラスト調

---

*本ファイルは RENDER が GEMINI_API_KEY 未設定時のフォールバック出力として作成。*  
*鍵が設定され次第、上記スクリプトを実行すれば即時8枚を一括生成できる。*
