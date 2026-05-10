'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HERO_VIDEO = '/videos/bbangtteurak-main.mp4';
const HERO_VIDEO_FALLBACK = 'https://cdn.coverr.co/videos/coverr-baking-bread-2998/1080p.mp4';
const HERO_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1920&q=80&auto=format';
const MASTER_PORTRAIT = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1200&q=80&auto=format';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="hero hero--split" id="home">
      {/* LEFT — grayscale video */}
      <div className="hero__pane hero__pane--left">
        <div
          className="hero__video-fallback"
          style={{ backgroundImage: `url('${HERO_IMAGE_FALLBACK}')` }}
          aria-hidden="true"
        ></div>
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={HERO_IMAGE_FALLBACK}
          onLoadedData={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{ opacity: loaded && !errored ? 1 : 0 }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
          <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
        </video>
        <div className="hero__pane-overlay"></div>

        <div className="hero__pane-meta hero__pane-meta--top">
          <span className="rule"></span>
          <span>N° 01 — The Daily Craft</span>
        </div>
        <div className="hero__pane-meta hero__pane-meta--bottom">
          <div className="hero__time" style={{ alignItems: 'flex-start' }}>
            <span className="hour">04:30</span>
            <span className="lbl">AM · Mixing begins</span>
          </div>
        </div>
      </div>

      {/* RIGHT — master baker portrait strip */}
      <div className="hero__pane hero__pane--right">
        <div
          className="hero__portrait"
          style={{ backgroundImage: `url('${MASTER_PORTRAIT}')` }}
          role="img"
          aria-label="빵뜨락 마스터 베이커 김도윤"
        ></div>
        <div className="hero__pane-overlay"></div>

        <div className="hero__pane-meta hero__pane-meta--top hero__pane-meta--right">
          <span>N° 02 — The Artisan</span>
          <span className="rule"></span>
        </div>
        <div className="hero__pane-meta hero__pane-meta--bottom hero__pane-meta--right">
          <div className="hero__master-name" style={{ alignItems: 'flex-end' }}>
            <span className="kanji">金 道 潤</span>
            <span className="kr">김도윤 · Master Baker</span>
            <span className="en">Since 1998 · 28 years of craft</span>
          </div>
        </div>
      </div>

      {/* Center — copy band over the gradient seam */}
      <div className="hero__center">
        <div className="hero__center-card">
          <div className="hero__eyebrow">Bbang-tteurak · Since 2014</div>
          <h1 className="hero__title">
            매일 아침,<br />
            <em>정직하게 구워내는<br />따뜻한 빵.</em>
          </h1>
          <p className="hero__sub">
            빵뜨락은 좋은 재료와 정성으로<br />
            하루의 시작을 더 따뜻하게 만듭니다.
          </p>

          <div className="hero__buttons">
            <Link href="/menu" className="btn btn--cream">
              메뉴 둘러보기
              <span className="arrow"></span>
            </Link>
            <Link href="/stores" className="btn btn--ghost">
              매장 찾기
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
