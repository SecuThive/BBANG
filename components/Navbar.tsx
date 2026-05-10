'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: '브랜드 소개', href: '/about' },
  { label: '메뉴', href: '/menu' },
  { label: '매장 안내', href: '/stores' },
  // { label: '창업 문의', href: '/franchise' }, // 창업 관련 일시 비공개
  { label: '고객센터', href: '/support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navClass = ['nav', scrolled ? 'scrolled' : '', open ? 'is-open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass}>
        <Link href="/" className="nav__logo" aria-label="빵뜨락 홈으로">
          <span className="mark"></span>
          빵뜨락
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 13,
            opacity: 0.55,
            letterSpacing: '0.15em',
            marginLeft: 4,
          }}>BBANG-TTEURAK</span>
        </Link>

        <div className="nav__menu">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link href="/stores" className="nav__store">
            <span className="nav__store-dot" aria-hidden="true"></span>
            매장찾기
          </Link>
        </div>

        <button
          className="nav__hamburger"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-hidden={!open}>
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {item.label}
            <span className="arrow">→</span>
          </Link>
        ))}
        <div className="mobile-menu__foot">
          빵뜨락 고객센터 1588-0000<br />
          평일 09:00 — 18:00
        </div>
      </div>
    </>
  );
}
