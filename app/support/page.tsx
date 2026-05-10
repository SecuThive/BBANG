'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHead from '@/components/PageHead';

const FAQS = [
  { q: '빵뜨락 빵에는 어떤 밀가루를 사용하나요?', a: '식빵·바게트·캄파뉴 등 주요 식사빵에는 국내산 우리밀 100%를 사용합니다. 페이스트리류는 프랑스산 T55 밀가루를 사용해 가벼운 결을 살립니다.' },
  { q: '매장에서 직접 굽나요?', a: '네. 빵뜨락 전 매장은 매일 새벽 4시 30분에 반죽을 시작해 6시에 매대에 올립니다. 본사 공장에서 완제품을 받아 데우는 방식이 아닙니다.' },
  { q: '전일 빵을 다음날 판매하나요?', a: '아닙니다. 빵뜨락은 그날 구운 빵만 판매합니다. 영업 종료 후 남은 빵은 본사 가이드에 따라 폐기 또는 푸드뱅크로 기부됩니다.' },
  { q: '알러지 정보는 어디서 확인하나요?', a: '매장 매대의 각 제품 라벨, 그리고 빵뜨락 앱 메뉴 상세에서 알러지 유발 성분(밀·우유·계란·견과류 등)을 확인하실 수 있습니다.' },
  { q: '케이크는 예약 주문이 가능한가요?', a: '가능합니다. 매장 방문 또는 빵뜨락 앱에서 최소 2일 전 예약해 주세요. 일부 시즌 한정 케이크는 1주일 전 예약이 필요합니다.' },
  { q: '단체 주문(돌잔치, 회사 행사 등)은 어떻게 하나요?', a: '20개 이상 단체 주문은 빵뜨락 B2B 팀(1588-0002)으로 문의 주시면 가까운 매장으로 안내드립니다.' },
  { q: '빵뜨락 앱은 어떻게 다운로드하나요?', a: 'App Store · Google Play에서 "빵뜨락"으로 검색하시면 됩니다. 앱에서는 매장 픽업 예약, 멤버십 적립, 메뉴 영양정보 확인이 가능합니다.' },
  { q: '기프트카드를 발행할 수 있나요?', a: '5만원 단위로 종이 기프트카드와 모바일 기프트카드를 발행하고 있습니다. 자세한 내용은 1588-0000으로 문의해 주세요.' },
];

const CONTACTS = [
  { en: 'Customer Care', kr: '고객센터', tel: '1588-0000', hours: '평일 09:00 — 18:00' },
  { en: 'Franchise', kr: '창업 문의', tel: '1588-0001', hours: '평일 09:00 — 18:00' },
  { en: 'B2B & Catering', kr: '단체·B2B', tel: '1588-0002', hours: '평일 09:00 — 18:00' },
];

export default function SupportPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <PageHead
          eyebrow="Customer Support"
          title={<>빵뜨락과의 모든 대화는<br />언제든 환영합니다.</>}
          sub="제품 · 매장 · 서비스에 대한 모든 문의를 정성껏 답변드립니다. 평일 09:00 — 18:00 사이에 가장 빠르게 도와드릴 수 있습니다."
          crumbs="Support"
        />

        <section className="section" style={{ background: 'var(--paper)' }}>
          <div style={{
            maxWidth: 'var(--max)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: '1px solid var(--hairline)',
          }}>
            {CONTACTS.map((c, i) => (
              <div key={c.en} style={{
                padding: '40px 36px',
                borderRight: i < 2 ? '1px solid var(--hairline)' : undefined,
                background: 'var(--cream-soft)',
              }}>
                <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brown)', marginBottom: 12 }}>{c.en}</div>
                <div style={{ fontFamily: 'var(--serif-kr)', fontSize: 17, color: 'var(--ink)', marginBottom: 14 }}>{c.kr}</div>
                <div style={{ fontFamily: 'var(--serif-en)', fontSize: 32, color: 'var(--brown-deep)', letterSpacing: '0.05em', marginBottom: 6 }}>{c.tel}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{c.hours}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ background: 'var(--cream-soft)', borderTop: '1px solid var(--hairline)' }}>
          <div className="section__head">
            <div>
              <div className="section__eyebrow">Frequently Asked</div>
              <h2 className="section__title">자주 묻는 질문.</h2>
            </div>
            <p className="section__lead">
              가장 많이 받는 문의 8가지를 모았습니다. 더 궁금한 내용이 있다면 1588-0000으로 연락주세요.
            </p>
          </div>

          <div style={{ maxWidth: 920, margin: '0 auto', borderTop: '1px solid var(--hairline)' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--hairline)' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%',
                      padding: '28px 8px',
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 40px',
                      gap: 24,
                      alignItems: 'center',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 0,
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontSize: 13, color: 'var(--brown)', letterSpacing: '0.2em' }}>Q · 0{i + 1}</span>
                    <span style={{ fontFamily: 'var(--serif-kr)', fontWeight: 500, fontSize: 18, color: 'var(--ink)' }}>{f.q}</span>
                    <span style={{
                      fontSize: 22,
                      color: 'var(--brown-deep)',
                      transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      textAlign: 'right',
                    }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.22,1,0.36,1)' }}>
                    <div style={{ padding: '0 8px 32px 92px', fontSize: 15, lineHeight: 1.95, color: 'var(--muted)', maxWidth: 720 }}>{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
