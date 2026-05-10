'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HERO_VIDEO = '/videos/bbangtteurak-main.mp4';
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
    <section className="hero" id="home">

      {/* 상단 — 영상 + 인물사진 (카피 없음) */}
      <div className="hero__stage">
        <div className="hero__pane hero__pane--left">
          <div
            className="hero__video-fallback"
            style={{ backgroundImage: `url('${HERO_IMAGE_FALLBACK}')` }}
            aria-hidden="true"
          ></div>
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay loop muted playsInline preload="auto"
            poster={HERO_IMAGE_FALLBACK}
            onLoadedData={() => setLoaded(true)}
            onError={() => setErrored(true)}
            style={{ opacity: loaded && !errored ? 1 : 0 }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero__pane-overlay"></div>
        </div>

        <div className="hero__pane hero__pane--right">
          <div
            className="hero__portrait"
            style={{ backgroundImage: `url('${MASTER_PORTRAIT}')` }}
            role="img"
            aria-label="빵뜨락 마스터 베이커 김도윤"
          ></div>
          <div className="hero__pane-overlay"></div>
        </div>

        <div className="hero__grain" aria-hidden="true"></div>

        <div className="hero__edition">
          <span className="hero__edition-no">N° 01</span>
          <span className="hero__edition-rule"></span>
          <span className="hero__edition-issue">Bbang-tteurak Journal · Vol. 12</span>
        </div>
      </div>

      {/* 하단 — 카피 밴드 */}
      <div className="hero__band">
        <div className="hero__band-inner">
          <div className="hero__band-copy">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-rule"></span>
              <span>Maison Bbang-tteurak</span>
              <span className="hero__eyebrow-dot">•</span>
              <span>Est. 2014, Seoul</span>
            </div>
            <h1 className="hero__title">
              매일 아침,
              <em> 정직하게 구워내는 </em>
              <br />따뜻한 빵.
            </h1>
            <div className="hero__fleuron" aria-hidden="true">
              <span className="hero__fleuron-line"></span>
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                <path d="M1 5 Q 5 1, 11 5 T 21 5" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="11" cy="5" r="1.4" fill="currentColor" />
              </svg>
              <span className="hero__fleuron-line"></span>
            </div>
            <p className="hero__sub">
              좋은 재료와 28시간의 저온 발효, 그리고 매일 새벽 4시 30분의 시작 —<br />
              빵뜨락은 정성으로 하루의 시작을 더 따뜻하게 만듭니다.
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

          <aside className="hero__band-credits">
            <div className="hero__seal" aria-hidden="true">
              <svg viewBox="0 0 80 80" width="72" height="72">
                <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
                <circle cx="40" cy="40" r="31" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
                <text x="40" y="36" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="9" letterSpacing="1" fill="currentColor">Maison</text>
                <text x="40" y="50" textAnchor="middle" fontFamily="'Noto Serif KR', serif" fontSize="14" letterSpacing="2" fill="currentColor">빵뜨락</text>
                <text x="40" y="62" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="7" letterSpacing="2" fill="currentColor" opacity="0.7">EST. 2014</text>
              </svg>
            </div>
            <div className="hero__credit">
              <span className="hero__credit-label">The Daily Craft</span>
              <span className="hero__credit-value">04:30 AM — Mixing begins</span>
            </div>
            <div className="hero__credit">
              <span className="hero__credit-label">The Artisan</span>
              <span className="hero__credit-value">
                <span className="kanji">金道潤</span>
                <span className="kr">김도윤 · Master Baker</span>
              </span>
            </div>
            <div className="hero__signature" aria-hidden="true">
              <svg viewBox="0 0 140 30" width="110" height="24">
                <path d="M5 22 C 12 8, 22 8, 26 18 C 28 24, 36 24, 40 14 C 44 6, 52 6, 56 16 C 60 24, 70 22, 76 12 C 82 4, 92 8, 96 16 C 100 22, 110 22, 116 14 C 122 8, 130 12, 134 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </aside>
        </div>
      </div>

    </section>
  );
}
