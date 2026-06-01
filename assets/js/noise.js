/**
 * RegalRise HP v2 — Noise Canvas
 * movie.html の noiseLoop() を共通モジュールとして切り出し
 *
 * 使い方:
 *   HTML に <canvas id="noise-canvas"> を置いた状態でこのスクリプトを読み込む。
 *   hero着地時に一度だけ noiseBurst() を呼ぶ（500ms）。
 */

(function () {
  'use strict';

  const canvas = document.getElementById('noise-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let burstMode = false;
  let animId = null;

  // キャンバスサイズをウィンドウに合わせる
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // ノイズ1フレーム描画
  function drawNoise() {
    const W = canvas.width;
    const H = canvas.height;
    const img = ctx.createImageData(W, H);
    const d = img.data;

    if (burstMode) {
      // バーストモード：テレビ砂嵐（RGB独立ランダム・高アルファ）
      for (let i = 0; i < d.length; i += 4) {
        d[i]   = Math.random() * 255;
        d[i+1] = Math.random() * 255;
        d[i+2] = Math.random() * 255;
        d[i+3] = 180 + Math.random() * 75;
      }
    } else {
      // 通常モード：モノクロノイズ（微弱）
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() > 0.5 ? 255 : 0;
        d[i] = d[i+1] = d[i+2] = v;
        d[i+3] = Math.random() * 55;
      }
    }

    ctx.putImageData(img, 0, 0);
  }

  // ノイズループ（burstMode 中は高速描画）
  function noiseLoop() {
    drawNoise();
    animId = setTimeout(noiseLoop, burstMode ? 28 : 45);
  }

  noiseLoop();

  /**
   * noiseBurst()
   * hero 着地時に呼ぶ。500ms だけバーストモードを有効にして
   * movie.html → index.html の引き継ぎエフェクトを演出する。
   */
  window.noiseBurst = function (duration) {
    duration = duration || 500;
    burstMode = true;
    setTimeout(function () {
      burstMode = false;
    }, duration);
  };

})();
