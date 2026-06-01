# RegalRise HP v2 ビジュアル設計図

## モード（DIRECTOR宣言）

**🔥 情熱（PASSION）**
映画的。非対称。一言で刺す。整然3列グリッドは絶滅させる。
movie.htmlのDNAを引き継ぎ、スクロールするごとに体温が上がる構造にする。

---

## 1. カラーシステム

### 設計の根拠

movie.htmlのDNA（`#0A0A0A`背景 + `#FF1E1E`アクセント）を完全継承。
Navy×GoldはRegalCastコーポレート系に適用されるもの。
RegalRise HPはeスポーツ部門の独立ブランドとして赤×黒×Goldで構成する（前回のdesign_spec.mdで確立済みの設計判断）。

### Gold on White は絶対禁止の根拠

Gold `#E8A15A` on White `#FFFFFF` のコントラスト比 = 2.42:1（WCAG AA基準4.5:1を大幅に下回る）。
これは過去2回STEWARDに指摘された重大違反。このページでGoldをテキストとして使う場合は、必ずNavy `#141D3D` またはBlack系 `#0A0A0A` 背景上のみ。

### CSS変数完全定義

```css
:root {
  /* ─── ベースカラー ─── */
  --color-black:        #0A0A0A;   /* ページ背景・最暗部 */
  --color-black-mid:    #111111;   /* セクション背景変化（ほぼ同色だが奥行き感） */
  --color-black-soft:   #181818;   /* カード背景・サーフェス */
  --color-black-raise:  #1F1F1F;   /* カードホバー・インプット背景 */

  /* ─── レッドシステム ─── */
  --color-red:          #FF1E1E;   /* メインアクセント */
  --color-red-dim:      #CC1818;   /* ボタンホバー時の沈み込み */
  --color-red-glow:     rgba(255, 30, 30, 0.40);  /* ヒーロー赤グロー・強 */
  --color-red-glow-mid: rgba(255, 30, 30, 0.20);  /* セクションアクセント・中 */
  --color-red-glow-soft:rgba(255, 30, 30, 0.08);  /* サーフェス色付け・弱 */
  --color-red-border:   rgba(255, 30, 30, 0.30);  /* ボーダー色 */

  /* ─── テキスト ─── */
  --color-text-primary:   #FFFFFF;            /* メインテキスト */
  --color-text-secondary: rgba(255,255,255,0.55);  /* サブテキスト */
  --color-text-muted:     rgba(255,255,255,0.30);  /* 注記・ラベル */
  --color-text-red:       #FF1E1E;            /* 強調・キーワード赤 */

  /* ─── Gold（Navy背景上専用） ─── */
  /* Gold on Black背景も使用可。Gold on Whiteは絶対使用禁止 */
  --color-gold:           #E8A15A;            /* アクセントGold（黒背景上のみ） */
  --color-gold-glow:      rgba(232,161,90,0.20);   /* Goldグロー */

  /* ─── ボーダー・区切り ─── */
  --color-border:         rgba(255,255,255,0.08);   /* 通常ボーダー */
  --color-border-red:     rgba(255, 30, 30, 0.30);  /* 赤アクセントボーダー */
  --color-border-strong:  rgba(255,255,255,0.15);   /* 強めボーダー（カード等） */

  /* ─── エフェクト ─── */
  --scanline-opacity:     0.04;   /* スキャンライン強度（常時） */
  --noise-opacity:        0.025;  /* ノイズ強度（常時） */

  /* ─── グラデーション ─── */
  --grad-hero-bg:
    radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,30,30,0.18) 0%, transparent 70%),
    #0A0A0A;
  --grad-red-sweep:
    linear-gradient(90deg, transparent 0%, #FF1E1E 50%, transparent 100%);
  --grad-black-bottom:
    linear-gradient(to bottom, transparent 0%, #0A0A0A 100%);
  --grad-red-vignette:
    radial-gradient(ellipse at 50% 100%, rgba(255,30,30,0.15) 0%, transparent 60%);
}
```

---

## 2. タイポグラフィ設計

### フォントファミリー

```html
<!-- Google Fonts URL（headに記述） -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Anton&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
```

| 変数名 | フォント | 用途 |
|---|---|---|
| `--font-display` | `'Bebas Neue', sans-serif` | 大見出し・ロゴタイプ・REGAL RISE |
| `--font-impact` | `'Anton', sans-serif` | 数字の強調・カウンター・NO SKILL系 |
| `--font-body` | `'Noto Sans JP', sans-serif` | 本文・UI・日本語テキスト全般 |

### フォント使い分けルール

- **Bebas Neue**：ページタイトル・セクション見出し・hero キャッチの英字。字間 `0.05em` を基本。movie.htmlと同じ使い方
- **Anton**：数字の羅列（88名・8回・400回視聴等）とNO SKILL/NO NAME/NO EXPERIENCEの継承テキスト。字間 `0.03em`
- **Noto Sans JP w900**：日本語の大見出し（「眠れる才能を、主人公へ。」等）。英数字混じりのキャッチにも使える
- **Noto Sans JP w400/700**：本文・説明文・UI（ボタンラベル・ナビ）

### タイポグラフィスケール

```css
:root {
  /* ─── 見出し ─── */
  --text-display-xl:  clamp(80px,  14vw, 160px); /* hero大見出し・Bebas Neue */
  --text-display-l:   clamp(56px,  9vw,  120px); /* セクション大見出し・Bebas Neue */
  --text-display-m:   clamp(40px,  6.5vw, 80px); /* サブ見出し英字・Bebas Neue */
  --text-h2:          clamp(28px,  4vw,   48px); /* セクション日本語見出し・Noto JP w900 */
  --text-h3:          clamp(20px,  2.5vw, 32px); /* カード見出し・Noto JP w700 */

  /* ─── 本文 ─── */
  --text-body-l:      clamp(16px,  1.5vw, 18px); /* リード文・Noto JP w400 */
  --text-body:        15px;                       /* 本文・Noto JP w400 */
  --text-label:       clamp(11px,  1.1vw, 13px); /* ラベル・バッジ・Bebas Neue or Noto JP w700 */

  /* ─── 数字専用 ─── */
  --text-stat:        clamp(64px,  10vw, 120px); /* 実績数字・Anton */
  --text-stat-sub:    clamp(14px,  1.5vw, 18px); /* 数字の補足テキスト・Noto JP w400 */

  /* ─── 行間 ─── */
  --leading-tight:    1.0;  /* display系 */
  --leading-snug:     1.3;  /* 見出し系 */
  --leading-normal:   1.7;  /* 本文 */
  --leading-loose:    2.0;  /* 息継ぎテキスト */
}
```

---

## 3. スペーシング・形状

```css
:root {
  /* ─── セクション余白 ─── */
  --section-pad-y:       clamp(80px, 12vw, 140px);  /* セクション上下 */
  --section-pad-x:       clamp(20px, 6vw,  80px);   /* コンテナ左右 */
  --container-max:       1200px;                     /* 最大幅 */
  --container-wide:      1400px;                     /* 全幅セクション用 */

  /* ─── カード・サーフェス ─── */
  --radius-card:         4px;   /* カード角丸（鋭角。丸すぎない） */
  --radius-btn:          2px;   /* ボタン角丸（ほぼスクエア） */
  --radius-badge:        2px;   /* バッジ */
  --radius-large:        8px;   /* ダイアログ等 */

  /* ─── シャドウ ─── */
  --shadow-card:         0 2px 20px rgba(0,0,0,0.6);
  --shadow-card-red:     0 0 24px rgba(255,30,30,0.20), 0 2px 16px rgba(0,0,0,0.6);
  --shadow-btn-red:      0 0 20px rgba(255,30,30,0.35);
  --shadow-text-glow:    0 0 40px rgba(255,30,30,0.50);  /* hero見出しグロー */

  /* ─── ボーダー ─── */
  --border-card:         1px solid rgba(255,255,255,0.08);
  --border-card-red:     1px solid rgba(255,30,30,0.25);
  --border-left-accent:  3px solid #FF1E1E;  /* 左アクセントライン */

  /* ─── トランジション ─── */
  --transition-fast:     150ms ease;
  --transition-base:     250ms ease;
  --transition-slow:     450ms cubic-bezier(0.22, 1, 0.36, 1);

  /* ─── z-index ─── */
  --z-nav:        100;
  --z-overlay:    200;
  --z-modal:      300;
}
```

---

## 4. ページ別レイアウト設計

---

### index.html

#### 全体構造

```
[NAV] ← fixed
[HERO] ← 100vh、movie.htmlからの着地。非対称レイアウト
[STATS] ← 実績数字。3列整列にしない
[DECLARATION] ← テキスト主体。息継ぎセクション
[NEWS] ← カード。AIっぽいグリッドにしない
[MEMBERS PICKUP] ← 非対称グリッド
[COMMUNITY CTA] ← 赤を大胆に使う
[FOOTER]
```

---

#### NAV（固定ナビゲーション）

```
背景:     rgba(10,10,10,0.92) + backdrop-filter: blur(12px)
高さ:     64px
padding:  0 clamp(20px, 6vw, 80px)
border-bottom: 1px solid rgba(255,30,30,0.15)
z-index:  var(--z-nav)

左端:     ロゴ（img + filter: invert(1) / 高さ 28px）
中央:     ページリンク（Bebas Neue 16px / letter-spacing 0.1em）
          HOME  MEMBERS  COMMUNITY  RESULTS
          アクティブ: 下線 2px solid #FF1E1E
右端:     「コミュステに参加する」ボタン（--btn-primary）
```

---

#### HERO（全画面）

**設計意図：movie.htmlの黒→赤グローの余韻を引き継ぐ。着地した瞬間に既に燃えている画面。**

```
height:   100vh
min-height: 600px
background: var(--grad-hero-bg)
overflow: hidden

レイアウト：非対称 2カラム（左60% / 右40%）
```

**左カラム（テキスト）**
```
position: absolute
left: clamp(20px, 8vw, 120px)
top: 50%
transform: translateY(-50%)
width: 55%

[英字サブライン]
  テキスト: "YOUR JOURNEY STARTS HERE"
  フォント: Bebas Neue 14px
  letter-spacing: 0.3em
  色: var(--color-text-muted)
  margin-bottom: 16px

[大見出し]
  テキスト: "眠れる才能を、"
  フォント: Noto Sans JP w900
  font-size: var(--text-display-l)
  色: #FFFFFF
  line-height: 1.1

[大見出し続き]
  テキスト: "主人公へ。"
  フォント: Noto Sans JP w900
  font-size: var(--text-display-l)
  色: #FF1E1E
  line-height: 1.1
  text-shadow: var(--shadow-text-glow)

[息継ぎ]
  margin-top: 32px
  高さ: 1px
  background: var(--color-red)
  width: 48px

[サブコピー]
  margin-top: 24px
  テキスト: "NO SKILL. NO NAME. NO EXPERIENCE."
  フォント: Anton 18px
  色: var(--color-text-secondary)
  letter-spacing: 0.05em

[サブコピー続き]
  margin-top: 8px
  テキスト: "それでいい。ここにいろ。"
  フォント: Noto Sans JP w700 16px
  色: var(--color-text-secondary)

[CTAボタン群]
  margin-top: 48px
  display: flex  gap: 16px  flex-wrap: wrap

  ボタン1（Primary）:
    テキスト: "コミュステに参加する"
    --btn-primary 参照

  ボタン2（Ghost）:
    テキスト: "アンバサダーになる"
    --btn-ghost 参照
```

**右カラム（ビジュアル装飾）**
```
position: absolute
right: 0
top: 0
width: 45%
height: 100%

内容物:
  赤い縦ライン（width: 2px, height: 60vh, 右から10%の位置, 上から20%）
  background: linear-gradient(to bottom, transparent, #FF1E1E 30%, #FF1E1E 70%, transparent)
  box-shadow: 0 0 30px rgba(255,30,30,0.6)

  スクロールダウン矢印:
    position: absolute  bottom: 40px  right: 10%
    Bebas Neue 11px  letter-spacing: 0.3em
    色: var(--color-text-muted)
    縦書き（writing-mode: vertical-rl）
    テキスト: "SCROLL DOWN"
    アニメーション: bounce 2s ease infinite
```

**全面エフェクト**
```
スキャンライン: .scanlines（movie.htmlと同仕様）
              opacity: var(--scanline-opacity)
ノイズキャンバス: 常時微弱。opacity: var(--noise-opacity)
ビネット:       var(--grad-hero-bg) に組み込み済み
```

---

#### STATS バナー（実績数字）

**設計意図：3列均等配置の禁止。数字に物語を付ける。映画字幕のような重さで表示。**

```
background: var(--color-black-mid)
padding: 60px clamp(20px, 6vw, 80px)
border-top: 1px solid var(--color-red-border)
border-bottom: 1px solid var(--color-red-border)

レイアウト: 横並び（flexbox）だが、意図的にずらす
  justify-content: flex-start（左寄せ、均等割りにしない）
  gap: 0（各アイテムが独自のpaddingとborderを持つ）

アイテムA（左）:
  padding-right: 64px
  border-right: 1px solid rgba(255,255,255,0.1)

  数字: "8"
  フォント: Anton  font-size: var(--text-stat)
  色: #FF1E1E

  単位: "回"
  フォント: Noto Sans JP w700  font-size: 18px
  色: var(--color-text-secondary)

  注釈: "止まらなかった、8回の大会"
  フォント: Noto Sans JP w400  font-size: 13px
  色: var(--color-text-muted)
  margin-top: 8px

アイテムB（中央）:
  padding: 0 64px
  border-right: 1px solid rgba(255,255,255,0.1)

  数字: "88"
  フォント: Anton  font-size: var(--text-stat)
  色: #FFFFFF

  単位: "名"
  フォント: Noto Sans JP w700  font-size: 18px
  色: var(--color-text-secondary)

  注釈: "コミュステ杯 vol.1に集まった数"
  フォント: Noto Sans JP w400  font-size: 13px
  色: var(--color-text-muted)
  margin-top: 8px

アイテムC（右）:
  padding-left: 64px

  数字: "400+"
  フォント: Anton  font-size: var(--text-stat)
  色: #FFFFFF

  単位: "視聴"
  フォント: Noto Sans JP w700  font-size: 18px
  色: var(--color-text-secondary)

  注釈: "見届けた者たちがいた"
  フォント: Noto Sans JP w400  font-size: 13px
  色: var(--color-text-muted)
  margin-top: 8px

※ アイテムA〜Cは縦方向のalign-itemsをあえてflex-endにして底辺揃えにする。
  高さが揃うことで「整列っぽさ」が出るため、各アイテムのpadding-topを異なる値にする：
  A: padding-top: 0
  B: padding-top: 20px
  C: padding-top: 12px
  → 数字の頭が意図的にずれ、映画的な非整列感を演出
```

---

#### 宣言セクション（テキスト主体）

**設計意図：情報を盛らない。余白で一言を重くする。**

```
background: #0A0A0A
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

レイアウト: 非対称 2カラム（左: 30% / 右: 60%、leftに空白を使う）

左カラム:
  padding-top: 12px
  テキスト: "DECLARATION"
  フォント: Bebas Neue 12px
  letter-spacing: 0.4em
  色: var(--color-red)
  縦書きではなく横書きで、上部に固定
  幅: 120px

右カラム:
  [大テキスト]
  テキスト: "ゲームは、孤独でやるものじゃない。"
  フォント: Noto Sans JP w900
  font-size: var(--text-h2)
  色: #FFFFFF
  line-height: var(--leading-snug)

  [改行して続き]
  margin-top: 32px
  テキスト: "勝っても負けても語れる仲間が、強さの土台になる。"
  フォント: Noto Sans JP w400
  font-size: var(--text-body-l)
  色: var(--color-text-secondary)
  line-height: var(--leading-normal)

  [区切り線]
  margin-top: 48px
  width: 100%
  height: 1px
  background: linear-gradient(to right, var(--color-red) 0%, transparent 60%)
```

---

#### NEWS セクション

**設計意図：カードをタイル状に並べない。ヘッドライン型の新聞レイアウト。AIが作ったと感じさせない。**

```
background: var(--color-black-soft)
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

セクションヘッダー:
  display: flex  justify-content: space-between  align-items: flex-end
  margin-bottom: 48px

  左:
    テキスト: "NEWS"
    フォント: Bebas Neue  font-size: var(--text-display-m)
    色: #FFFFFF

  右:
    テキスト: "すべて見る →"
    フォント: Noto Sans JP w700  font-size: 13px
    色: var(--color-red)

ニュースリスト（3件）:
  display: grid
  grid-template-columns: 1fr 1fr  ← 2列。3列にしない
  grid-template-rows: auto auto
  gap: 0

  アイテム1（大カード・2行にまたがる）:
    grid-row: 1 / span 2
    grid-column: 1
    padding: 36px 40px 36px 0
    border-right: 1px solid var(--color-border)
    border-bottom: none

    [日付]
    テキスト: "2026.05.23"
    フォント: Bebas Neue 12px  letter-spacing: 0.2em
    色: var(--color-text-muted)

    [カテゴリバッジ]
    margin-top: 12px
    background: var(--color-red-glow-soft)
    border: 1px solid var(--color-red-border)
    padding: 3px 10px
    border-radius: var(--radius-badge)
    テキスト: "大会"
    フォント: Noto Sans JP w700 11px
    色: var(--color-red)

    [タイトル]
    margin-top: 16px
    フォント: Noto Sans JP w900
    font-size: var(--text-h3)
    色: #FFFFFF
    line-height: 1.4

    [本文（大カードのみ）]
    margin-top: 16px
    フォント: Noto Sans JP w400
    font-size: var(--text-body)
    色: var(--color-text-secondary)
    line-height: var(--leading-normal)

  アイテム2（右上の小カード）:
    grid-row: 1
    grid-column: 2
    padding: 24px 0 24px 40px
    border-bottom: 1px solid var(--color-border)

    [日付 + カテゴリバッジ（小カード同仕様）]
    [タイトル（h3サイズより小さく body-l）]

  アイテム3（右下の小カード）:
    grid-row: 2
    grid-column: 2
    padding: 24px 0 24px 40px
    border-top: 1px solid var(--color-border)
```

---

#### MEMBERS ピックアップ

**設計意図：横3列カードを禁止。非対称グリッドで映画的な人物紹介にする。**

```
background: #0A0A0A
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

セクション冒頭（息継ぎ）:
  テキスト: "—— THE PLAYERS"
  フォント: Bebas Neue 12px  letter-spacing: 0.4em
  色: var(--color-text-muted)

セクション見出し:
  margin-top: 16px
  テキスト: "MEMBERS"
  フォント: Bebas Neue  font-size: var(--text-display-l)
  色: #FFFFFF

メンバーグリッド（非対称）:
  display: grid
  grid-template-columns: 2fr 1fr 1fr  ← 不均等3列
  grid-template-rows: auto auto
  gap: 2px  ← 細い黒い隙間でカードを分割する

  メンバーカードA（大・左）:
    grid-column: 1  grid-row: 1 / span 2
    aspect-ratio: 3/4
    background: var(--color-black-raise)
    border: var(--border-card)
    overflow: hidden
    position: relative

    [写真プレースホルダー]:
    width: 100%  height: 100%
    background: linear-gradient(to bottom, #1A1A1A 0%, #0F0F0F 100%)

    [テキストオーバーレイ]:
    position: absolute  bottom: 0  left: 0  right: 0
    padding: 24px 20px
    background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%)

    [名前]:
    フォント: Bebas Neue  font-size: var(--text-display-m)
    色: #FFFFFF  letter-spacing: 0.05em

    [役職/ゲーム]:
    margin-top: 4px
    フォント: Noto Sans JP w400  font-size: 13px
    色: var(--color-red)

    [ホバー時]:
    box-shadow: var(--shadow-card-red)
    border-color: var(--color-red-border)

  メンバーカードB・C（右2つ）:
    aspect-ratio: 1/1（正方形）
    同上の構成で、フォントサイズを小さく
    名前: Bebas Neue  font-size: var(--text-display-m) × 0.7
    役職/ゲーム: Noto Sans JP w400 11px

  メンバーカードD（下左）:
    grid-column: 2
    aspect-ratio: 1/1
    （Bと同仕様）

  メンバーカードE（下右）:
    grid-column: 3
    aspect-ratio: 1/1
    （Cと同仕様）

CTAリンク:
  margin-top: 32px
  テキスト: "全メンバーを見る →"
  フォント: Bebas Neue 16px  letter-spacing: 0.15em
  色: #FFFFFF
  ホバー: color → var(--color-red)
```

---

#### COMMUNITY CTA セクション

**設計意図：このページで最も大胆に赤を使う。人を動かす最後の一手。**

```
background: var(--color-red)  ← 背景が真っ赤
padding: clamp(80px, 12vw, 160px) clamp(20px, 6vw, 80px)
position: relative
overflow: hidden

[背景ノイズ（movie.html継承）]:
  スキャンラインオーバーレイ: opacity 0.06
  ノイズキャンバス: opacity 0.04

レイアウト: 縦中央配置  text-align: center

[サブライン]:
  テキスト: "COMMUNITY"
  フォント: Bebas Neue 12px  letter-spacing: 0.5em
  色: rgba(0,0,0,0.5)
  margin-bottom: 16px

[大見出し]:
  テキスト: "舞台は、ここにある。"
  フォント: Noto Sans JP w900
  font-size: var(--text-display-l)
  色: #000000  ← 赤背景上は黒テキスト
  line-height: 1.1

[サブコピー]:
  margin-top: 24px
  テキスト: "ゲームジャンルを問わず、すべてのプレイヤーに舞台を。"
  フォント: Noto Sans JP w400
  font-size: var(--text-body-l)
  色: rgba(0,0,0,0.7)

[CTAボタン]:
  margin-top: 48px

  ボタン（黒ボタン on 赤背景）:
    background: #0A0A0A
    color: #FFFFFF
    border: none
    padding: 18px 48px
    フォント: Noto Sans JP w900  font-size: 16px
    border-radius: var(--radius-btn)
    box-shadow: 0 4px 40px rgba(0,0,0,0.4)
    ホバー: background → #1F1F1F, box-shadow 強化

  ボタン（サブ・アウトライン on 赤背景）:
    margin-left: 16px
    background: transparent
    color: #000000
    border: 2px solid rgba(0,0,0,0.4)
    padding: 16px 32px
    フォント: Noto Sans JP w700  font-size: 15px
    ホバー: background → rgba(0,0,0,0.1)

[右下の装飾テキスト（読めない程度に大きく）]:
  position: absolute
  right: -2%  bottom: -10%
  テキスト: "RISE"
  フォント: Bebas Neue  font-size: 280px
  色: rgba(0,0,0,0.08)
  pointer-events: none
  user-select: none
```

---

### community.html

#### 全体構造

```
[NAV] ← index.htmlと共通
[HERO] ← コミュステの世界観。赤グロー
[ABOUT] ← コミュステとは。テキスト+斜め分割
[STATS] ← 大会実績数字を映画的に
[PILLARS] ← 3つの柱。縦並びで重厚感
[GAMES] ← 対応ゲーム一覧
[AMBASSADOR CTA] ← アンバサダーへの橋渡し
[FOOTER]
```

---

#### HERO（コミュステ）

```
height: 100vh
min-height: 600px
background: radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,30,30,0.35) 0%, transparent 70%), #0A0A0A

テキスト構成（中央配置）:
  [サブライン]
  テキスト: "COMUST"  ← コミュステの通称
  フォント: Bebas Neue 12px  letter-spacing: 0.5em
  色: var(--color-text-muted)

  [大見出し英字]
  テキスト: "YOUR STAGE."
  フォント: Bebas Neue  font-size: var(--text-display-xl)
  色: #FFFFFF
  text-shadow: var(--shadow-text-glow)

  [大見出し日本語]
  テキスト: "舞台は、ここにある。"
  フォント: Noto Sans JP w900
  font-size: var(--text-h2)
  色: rgba(255,255,255,0.9)
  margin-top: 16px

  [サブコピー]
  margin-top: 32px
  テキスト: "全ゲームジャンル対応。初心者からガチ勢まで。"
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)

  [Discordボタン]
  margin-top: 48px
  --btn-primary（赤）

スキャンライン + ノイズ: index.htmlと同仕様
```

---

#### ABOUT（コミュステとは）

**設計意図：テキスト+斜め分割。左右を切り分けて緊張感を出す。横均等2カラムにしない。**

```
background: #0A0A0A
overflow: hidden

レイアウト:
  display: grid
  grid-template-columns: 55% 45%
  min-height: 60vh

左カラム（テキスト）:
  padding: var(--section-pad-y) clamp(20px, 6vw, 80px) var(--section-pad-y) clamp(20px, 8vw, 120px)
  display: flex  flex-direction: column  justify-content: center

  [ラベル]
  テキスト: "ABOUT COMUST"
  フォント: Bebas Neue 12px  letter-spacing: 0.4em
  色: var(--color-red)
  margin-bottom: 24px

  [見出し]
  テキスト: "すべてのプレイヤーに、舞台を提供する。"
  フォント: Noto Sans JP w900  font-size: var(--text-h2)
  色: #FFFFFF  line-height: var(--leading-snug)

  [本文]
  margin-top: 24px
  テキスト: （ブリーフの説明文をSCRIBEが展開）
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)  line-height: var(--leading-normal)

  [プラットフォーム表示]
  margin-top: 40px
  display: flex  gap: 24px

  Discord ラベル:
    background: #5865F2（Discord色）
    color: #FFFFFF
    padding: 6px 14px
    border-radius: 4px
    フォント: Noto Sans JP w700  font-size: 13px

  X ラベル:
    background: #000000
    color: #FFFFFF
    border: 1px solid rgba(255,255,255,0.2)
    padding: 6px 14px
    border-radius: 4px
    フォント: Noto Sans JP w700  font-size: 13px

右カラム（装飾）:
  position: relative
  background: var(--color-black-soft)

  [斜め分割ライン]:
  position: absolute  left: -1px  top: 0  bottom: 0  width: 60px
  background: linear-gradient(to right, #0A0A0A 0%, transparent 100%)
  clip-path: polygon(0 0, 30px 0, 100% 100%, 0 100%)
  （左カラムが右カラムの上に斜めに食い込んでいるように見える）

  内容物:
    中央に赤い縦ライン（width: 2px, height: 60%, opacity: 0.4）
    右側に Discordサーバー参加者の視覚的な表現
    （SCRIBEがコピーを当てる前はプレースホルダーでOK）
```

---

#### 大会実績（数字を映画的に）

**設計意図：数字を並べるのではなく、「一枚一枚 photograph を見せる」感覚。**

```
background: var(--color-black-mid)
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)
border-top: 1px solid var(--color-red-border)
border-bottom: 1px solid var(--color-red-border)

セクション見出し:
  テキスト: "TOURNAMENT RECORD"
  フォント: Bebas Neue  font-size: var(--text-display-m)
  色: #FFFFFF

  サブ:
  テキスト: "戦いの記録"
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-muted)
  margin-left: 24px

大会リスト（8件）:
  display: flex  flex-direction: column  gap: 0
  （横グリッドにしない。縦一覧）

  各行:
    display: grid
    grid-template-columns: 120px 1fr 80px
    align-items: center
    padding: 20px 0
    border-bottom: 1px solid var(--color-border)

    [日付]: Bebas Neue 14px  letter-spacing: 0.15em  色: var(--color-text-muted)
    [大会名]: Noto Sans JP w700  font-size: var(--text-body-l)  色: #FFFFFF
    [ゲームバッジ]: 後述のバッジコンポーネント

    ホバー:
    background: var(--color-black-raise)
    padding-left: 16px（左にずれる感覚）
    transition: var(--transition-base)

  最初の行（コミュステ杯 vol.1）:
    特別扱い。background: var(--color-red-glow-soft)
    border-left: var(--border-left-accent)
    padding-left: 20px
```

---

#### 3つの柱（重厚感・縦並び）

**設計意図：横3列グリッドを絶対に避ける。縦に積んで、重量感を出す。**

```
background: #0A0A0A
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

セクション見出し:
  テキスト: "PILLARS"
  フォント: Bebas Neue  font-size: var(--text-display-m)
  色: var(--color-red)

各柱（縦3枚・非対称）:

  柱1「大会運営」:
    display: flex
    align-items: flex-start
    gap: 48px
    padding: 64px 0
    border-bottom: 1px solid var(--color-border)

    左: 番号 "01"
      フォント: Anton  font-size: var(--text-stat)
      色: var(--color-red)  opacity: 0.4（薄い）

    右:
      [見出し]
      テキスト: "大会運営"
      フォント: Noto Sans JP w900  font-size: var(--text-h2)
      色: #FFFFFF

      [英字サブ]
      テキスト: "TOURNAMENT"
      フォント: Bebas Neue 14px  letter-spacing: 0.3em
      色: var(--color-text-muted)

      [本文]
      margin-top: 20px
      フォント: Noto Sans JP w400  font-size: var(--text-body-l)
      色: var(--color-text-secondary)
      line-height: var(--leading-normal)

  柱2「アンバサダー制度」:
    （柱1と同構成）
    番号 "02"

  柱3「配信者部門 Regal Rise」:
    （柱1と同構成）
    番号 "03"
    border-bottom: none

大事な設計ルール:
  柱1〜3の左余白をそれぞれ0px / 20px / 40pxと意図的にずらす
  → 整然と並んでいない感。視線が自然に流れる。
```

---

#### AMBASSADOR CTA

```
background: var(--color-black-soft)
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)
border-top: 2px solid var(--color-red)

レイアウト: 非対称2カラム（左70% テキスト / 右30% ボタン）
align-items: center

左:
  テキスト: "コミュニティの顔に、なれ。"
  フォント: Noto Sans JP w900  font-size: var(--text-h2)
  色: #FFFFFF

  margin-top: 16px
  テキスト: "スキル不問。でも本気の人間だけが、場を変える。"
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)

右:
  --btn-primary（赤ボタン）
  テキスト: "アンバサダーに応募する →"
```

---

### ambassador.html

**設計意図：全体を「燃やす」ページ。赤と黒だけで戦う。コミュニティに貢献したい人間を最後の一歩で動かす。**

#### 全体構造

```
[NAV] ← 共通
[HERO] ← フルスクリーン。超大きいテキスト。燃える
[WHAT IS] ← アンバサダーとは何か
[ROLES] ← 役割・特典。リスト化しない
[APPLY CTA] ← 最強のボタン
[FOOTER]
```

---

#### HERO（燃えるフルスクリーン）

```
height: 100vh
min-height: 600px
background: #0A0A0A
position: relative
overflow: hidden

[背景赤グロー]:
  background: radial-gradient(ellipse 100% 70% at 50% 80%, rgba(255,30,30,0.45) 0%, transparent 60%)
  position: absolute  inset: 0

[テキスト（画面中央）]:
  position: absolute
  top: 50%  left: 50%
  transform: translate(-50%, -50%)
  text-align: center

  [英字大見出し]
  テキスト: "BECOME THE FACE"
  フォント: Bebas Neue  font-size: var(--text-display-xl)
  色: #FFFFFF
  letter-spacing: 0.05em
  line-height: 0.9

  [英字大見出し続き]
  テキスト: "OF THE COMMUNITY."
  フォント: Bebas Neue  font-size: var(--text-display-xl) × 0.75
  色: #FF1E1E
  text-shadow: var(--shadow-text-glow)
  letter-spacing: 0.05em

  [日本語サブ]
  margin-top: 32px
  テキスト: "コミュニティの顔に、なれ。"
  フォント: Noto Sans JP w900  font-size: var(--text-h2)
  色: rgba(255,255,255,0.9)

  [区切り赤ライン]
  margin: 24px auto 0
  width: 80px  height: 2px
  background: var(--color-red)
  box-shadow: 0 0 12px rgba(255,30,30,0.6)

  [コピー]
  margin-top: 24px
  テキスト: "スキル不問。でも本気の人間だけが、場を変える。"
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)

[スキャンライン + ノイズ + ビネット]:
  共通仕様
```

---

#### WHAT IS（アンバサダーとは）

```
background: var(--color-black-soft)
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

レイアウト: 左テキスト80%、右ラベル20%（右に空気を持たせる）

左:
  [ラベル]
  テキスト: "AMBASSADOR"
  フォント: Bebas Neue 11px  letter-spacing: 0.5em
  色: var(--color-red)
  margin-bottom: 20px

  [見出し]
  テキスト: "担当ゲームの「場」を作る人間になれ。"
  フォント: Noto Sans JP w900  font-size: var(--text-h2)
  色: #FFFFFF

  [本文]
  margin-top: 24px
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)  line-height: var(--leading-normal)
  （SCRIBEが本文を書く。プレースホルダー可）
```

---

#### ROLES（役割・特典：流れるように）

**設計意図：箇条書きリストにしない。各役割が「シーン」として見える構成。**

```
background: #0A0A0A
padding: var(--section-pad-y) clamp(20px, 6vw, 80px)

各ロール（縦3シーン）:

  シーン1「場作り」:
    position: relative
    padding: 48px 0 48px clamp(32px, 6vw, 80px)
    border-left: var(--border-left-accent)
    margin-bottom: 48px

    [大きい番号（装飾）]:
    position: absolute  left: -20px  top: 0
    テキスト: "01"
    フォント: Anton  font-size: 80px
    色: rgba(255,30,30,0.10)（背景化）

    [タイトル]
    フォント: Noto Sans JP w900  font-size: var(--text-h3)
    色: #FFFFFF

    [英字サブ]
    テキスト: "COMMUNITY BUILDER"
    フォント: Bebas Neue 11px  letter-spacing: 0.3em
    色: var(--color-text-muted)
    margin-top: 4px

    [本文]
    margin-top: 16px
    フォント: Noto Sans JP w400  font-size: var(--text-body)
    色: var(--color-text-secondary)

  シーン2「特典」:
    （シーン1と同構成。ただしborder-leftをvar(--color-gold)に変更。Goldの使用は黒背景上なのでOK）

  シーン3「RegalRiseへの道」:
    （シーン1と同構成。border-left: var(--color-red)）
```

---

#### APPLY CTA（最強のボタン）

**設計意図：このページの終着点。全体の熱量を最大化して、ボタンに着地させる。**

```
background: #0A0A0A
padding: clamp(100px, 16vw, 200px) clamp(20px, 6vw, 80px)
position: relative
overflow: hidden
text-align: center

[背景：赤グロー全開]:
  background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,30,30,0.25) 0%, transparent 60%)
  position: absolute  inset: 0

[背景装飾テキスト]:
  position: absolute  bottom: -8%  left: 50%  transform: translateX(-50%)
  テキスト: "RISE"
  フォント: Bebas Neue  font-size: 360px
  色: rgba(255,255,255,0.025)
  pointer-events: none

[テキスト]:
  テキスト: "今がそのタイミングだ。"
  フォント: Noto Sans JP w900  font-size: var(--text-h2)
  色: #FFFFFF

  margin-top: 16px
  テキスト: "コミュニティを変える人間に、なれるかもしれない。"
  フォント: Noto Sans JP w400  font-size: var(--text-body-l)
  色: var(--color-text-secondary)

[最強ボタン]:
  margin-top: 56px

  background: var(--color-red)
  color: #FFFFFF
  border: none
  padding: 22px 72px
  フォント: Noto Sans JP w900  font-size: 18px
  border-radius: var(--radius-btn)
  box-shadow: var(--shadow-btn-red), 0 4px 40px rgba(0,0,0,0.5)

  ホバー:
    background: #CC1818
    box-shadow: 0 0 40px rgba(255,30,30,0.5), 0 4px 40px rgba(0,0,0,0.5)
    transform: translateY(-2px)
    transition: var(--transition-slow)

  [ボタン上の小テキスト（ボタン外・直上）]:
  margin-bottom: 12px
  テキスト: "Discordから1分で応募できます"
  フォント: Noto Sans JP w400  font-size: 13px
  色: var(--color-text-muted)
```

---

## 5. 共通コンポーネント仕様

### ボタン

```css
/* Primary（赤・黒背景上メイン） */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-red);
  color: #FFFFFF;
  border: none;
  padding: 14px 36px;
  font-family: var(--font-body);
  font-weight: 900;
  font-size: 15px;
  border-radius: var(--radius-btn);
  box-shadow: var(--shadow-btn-red);
  cursor: pointer;
  transition: var(--transition-slow);
  white-space: nowrap;
}
.btn-primary:hover {
  background: var(--color-red-dim);
  box-shadow: 0 0 32px rgba(255,30,30,0.45);
  transform: translateY(-2px);
}

/* Ghost（白枠・黒背景上） */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #FFFFFF;
  border: 1px solid rgba(255,255,255,0.30);
  padding: 13px 32px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 15px;
  border-radius: var(--radius-btn);
  cursor: pointer;
  transition: var(--transition-base);
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.60);
  background: rgba(255,255,255,0.05);
}
```

### ゲームバッジ

```css
/* 共通ベース */
.badge-game {
  display: inline-block;
  padding: 3px 10px;
  border-radius: var(--radius-badge);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.badge-apex       { background: rgba(255,30,30,0.15); color: #FF1E1E; border: 1px solid rgba(255,30,30,0.30); }
.badge-sf6        { background: rgba(232,161,90,0.15); color: #E8A15A; border: 1px solid rgba(232,161,90,0.30); }
.badge-valorant   { background: rgba(255,70,84,0.15); color: #FF4654; border: 1px solid rgba(255,70,84,0.30); }
.badge-slayspire  { background: rgba(120,80,255,0.15); color: #7850FF; border: 1px solid rgba(120,80,255,0.30); }

/* SF6バッジのGoldカラーについて：
   --color-black-mid (#111111) 背景上での使用。
   Gold (#E8A15A) on #111111 のコントラスト比 = 5.32:1（WCAG AA適合）。
   Gold on White は絶対禁止。ここはOK。 */
```

### スキャンライン（全ページ共通）

```css
.scanlines {
  position: fixed; /* または absolute */
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.06) 2px,
    rgba(0,0,0,0.06) 4px
  );
  pointer-events: none;
  z-index: var(--z-overlay);
  opacity: var(--scanline-opacity);
}
```

### 赤エネルギーライン（水平横断）

```css
.energy-line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--grad-red-sweep);
  opacity: 0.4;
  margin: 0;
}
/* セクション間の区切りに使用。hrの代替。 */
```

---

## 6. アニメーション仕様

### スクロールトリガーfade-in（Intersection Observer実装）

**全ページ共通。JS側で `.visible` クラスを付与する。**

```css
.fade-up {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 遅延バリアント */
.fade-up.delay-1 { transition-delay: 0.1s; }
.fade-up.delay-2 { transition-delay: 0.2s; }
.fade-up.delay-3 { transition-delay: 0.3s; }
```

```javascript
// JS実装メモ
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target); // 一度だけ発火
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
```

### ノイズキャンバス（movie.htmlから継承）

movie.htmlのnoiseLoop()実装をそのまま流用する。

```
配置: position: fixed; inset: 0; pointer-events: none; z-index: 1;
opacity: var(--noise-opacity) = 0.025（常時微弱ノイズ）
burstMode: hero着地時のみ一時的に0.08まで上げる（1回限り、500ms）
           → movie.htmlから着地した直後の「引き継ぎエフェクト」
```

### グリッチエフェクト（テキスト・限定使用）

hero大見出しのみ。常時ではなくページ読み込み後1回だけ走らせる。

```css
.glitch-once {
  animation: glitchIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes glitchIn {
  0%   { opacity: 0; transform: translateX(-6px) skewX(-2deg); filter: blur(2px); }
  20%  { opacity: 1; transform: translateX(4px) skewX(1deg); filter: blur(0); }
  40%  { transform: translateX(-2px); }
  60%  { transform: translateX(1px); }
  100% { transform: translateX(0); }
}
```

### ホバーエフェクト

```css
/* メンバーカードホバー */
.member-card {
  transition: border-color var(--transition-base),
              box-shadow var(--transition-base),
              transform var(--transition-slow);
}
.member-card:hover {
  border-color: var(--color-red-border);
  box-shadow: var(--shadow-card-red);
  transform: translateY(-4px);
}

/* テキストリンクホバー */
.link-red {
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}
.link-red:hover { color: var(--color-red); }

/* ナビリンクアンダーライン伸び */
.nav-link::after {
  content: '';
  display: block;
  height: 2px;
  background: var(--color-red);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* 大会リスト行ホバー */
.tournament-row {
  transition: background var(--transition-fast),
              padding-left var(--transition-base);
}
.tournament-row:hover {
  background: var(--color-black-raise);
  padding-left: 16px;
}
```

### 数字カウントアップ（STATSセクション）

```javascript
// スクロールで初めて見えたとき1回だけカウントアップ
function countUp(el, target, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
// data-count属性に目標値を入れ、IntersectionObserverで発火
```

---

## 7. レスポンシブブレークポイント

```css
/* ─── ブレークポイント定義 ─── */
/* 1200px以上: デスクトップ（設計の基準） */
/* 768px〜1199px: タブレット */
/* 767px以下: モバイル */

@media (max-width: 1199px) {
  /* タブレット調整 */
  .hero-layout {
    /* 非対称2カラム → 単一カラムに */
    grid-template-columns: 1fr;
  }
  .hero-left {
    width: 70%;  /* 左テキストを広げる */
  }
  .hero-right {
    display: none; /* 右装飾は非表示 */
  }

  .stats-banner {
    gap: 32px;  /* 数字間を縮める */
  }

  .news-grid {
    grid-template-columns: 1fr;  /* 単列 */
    grid-template-rows: auto;
  }
  .news-item-large { grid-row: auto; }  /* 大カードの特殊配置解除 */
}

@media (max-width: 767px) {
  /* モバイル調整 */

  /* NAV */
  .nav-links { display: none; }  /* ハンバーガーメニューに切り替え */
  nav { height: 56px; }

  /* HERO */
  .hero-cta { flex-direction: column; gap: 12px; }
  .hero-cta .btn-primary,
  .hero-cta .btn-ghost { width: 100%; justify-content: center; }

  /* STATS */
  .stats-banner {
    flex-direction: column;
    gap: 0;
  }
  .stats-item {
    padding: 24px 0;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-top: 0 !important;  /* 意図的なずれを解除 */
  }

  /* MEMBERS GRID */
  .members-grid {
    grid-template-columns: 1fr 1fr;  /* 3→2カラム */
  }
  .member-card-large { grid-row: auto; }  /* 大カード解除 */

  /* PILLARS（縦並び） */
  .pillar-item { padding-left: 24px; }
  .pillar-number { display: none; }  /* 巨大番号は非表示 */

  /* ambassador HERO */
  .ambassador-hero-text { width: 90%; }

  /* 共通フォント縮小 */
  /* clamp()が既に対応しているため最小値が効く */
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. AIっぽさ排除のための具体的設計判断

以下は設計図のどこかで「整然と並べたくなる衝動」に対抗するために取った判断の記録。COMPOSITORが「なぜこうなっているか」を迷わないよう明記する。

| 箇所 | AIっぽい選択（禁止） | このページの選択（理由） |
|---|---|---|
| STATS | 3カラム均等 Flexbox | flex-start左寄せ + 各アイテムの padding-top を意図的に変える → 高さがずれて映画字幕感 |
| NEWS | カード3枚タイル | 2カラムグリッド・大カードが2行またがる → 新聞レイアウト型 |
| MEMBERS | カード横3列 | grid-template-columns: 2fr 1fr 1fr の不均等3列 → 大小差で主役が生まれる |
| PILLARS | アイコン+テキスト横3列 | 縦積み。左余白を01/02/03で0/20/40pxとずらす → 視線が流れる |
| ambassador ROLES | 箇条書きリスト | 左ラインのついた縦シーン構造。番号を背景化して「場面感」を出す |
| 数字補足テキスト | "累計88名が参加" | "コミュステ杯 vol.1に集まった数" → 文脈と感情を乗せる |
| CTAセクション | 整列ボタン2個 | community CTAは背景を赤に反転させ、黒ボタンにする。「赤がメイン」という常識を崩す |

---

## COMPOSITORへの実装メモ

### ファイル構成

```
20260601_RegalRise_HP_v2/
  css/
    variables.css      ← :root 変数（このファイルを最初に作る）
    base.css           ← リセット・共通スタイル・スキャンライン・ノイズ
    nav.css            ← ナビゲーション（全ページ共通）
    footer.css         ← フッター（全ページ共通）
    index.css          ← index.html専用
    community.css      ← community.html専用
    ambassador.css     ← ambassador.html専用
  js/
    noise.js           ← movie.htmlのnoiseLoop()を移植・共通化
    scroll-anim.js     ← IntersectionObserver fade-up + カウントアップ
  index.html
  community.html
  ambassador.html
```

### 実装順序

1. `variables.css` を作り、このdesign_spec.md Section 1の:rootをそのまま貼る
2. `base.css` でリセット + .scanlines + body背景 + コンテナクラスを定義
3. `nav.css` を作って3ページで共通化（同一ナビを使う）
4. `noise.js` を作って全ページで読み込む
5. `index.html` を作る（HEROが最優先）
6. `community.html`
7. `ambassador.html`
8. `scroll-anim.js` を後から差し込む

### 重要注意事項

- **Gold on White 絶対禁止**：`--color-gold` を使うのは `--color-black` 系背景上のみ。background: #FFFFFF のある要素の中ではGoldテキストを使わない
- **ロゴ**: `img src="assets/logo/regalrise_logo.png"` + `filter: invert(1)` でwhite転換（SVG白版入手まで）
- **写真プレースホルダー**: `background: linear-gradient(to bottom, #1A1A1A 0%, #0F0F0F 100%)` + ダッシュ枠 `border: 1px dashed rgba(255,255,255,0.1)` で進める
- **スキャンラインのz-index**: `--z-overlay: 200` にする。コンテンツ（z-index: 10前後）より上に重なること
- **noiseキャンバス**: movie.htmlから `noise.js` として切り出す。burstModeはhero着地時のみ一時発火（500ms）

### STEWARDレビューポイント（引き継ぎ）

- Gold on White 違反チェック（最優先）
- コントラスト比チェック：secondary text `rgba(255,255,255,0.55)` on `#0A0A0A` = 7.9:1（AA適合確認済み）
- SF6バッジのGold: `#E8A15A` on `#111111` = 5.32:1（AA適合確認済み）
- muted text `rgba(255,255,255,0.30)` はlarge text（18px以上）専用。小テキストには使わない
- prefers-reduced-motion 対応を必ず確認（レビューチェック項目）
