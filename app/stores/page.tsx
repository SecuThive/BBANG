'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHead from '@/components/PageHead';

const REGIONS = ['서울', '경기·인천', '대전·세종', '부산·울산', '대구', '광주·전라', '강원'];
const STORES = [
  { region: '서울', name: '성수 본점', address: '서울 성동구 성수일로 ○○', hours: '07:00 — 22:00', tag: 'Flagship' },
  { region: '서울', name: '한남점', address: '서울 용산구 한남대로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '서울', name: '청담점', address: '서울 강남구 도산대로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '서울', name: '연남점', address: '서울 마포구 연남로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '경기·인천', name: '판교점', address: '경기 성남시 분당구 판교역로 ○○', hours: '07:30 — 22:00', tag: 'Daily' },
  { region: '경기·인천', name: '광교 호수공원점', address: '경기 수원시 영통구 광교호수공원로 ○○', hours: '08:00 — 22:00', tag: 'Atelier' },
  { region: '경기·인천', name: '송도점', address: '인천 연수구 송도과학로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '대전·세종', name: '대전 둔산점', address: '대전 서구 둔산로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '부산·울산', name: '부산 해운대점', address: '부산 해운대구 해운대로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
  { region: '대구', name: '대구 수성점', address: '대구 수성구 동대구로 ○○', hours: '08:00 — 22:00', tag: 'Daily' },
];

export default function StoresPage() {
  const [active, setActive] = useState('전체');
  const filtered = active === '전체' ? STORES : STORES.filter(s => s.region === active);

  return (
    <>
      <Navbar />
      <main>
        <PageHead
          eyebrow="Store Locator"
          title={<>가장 가까운<br />빵뜨락을 찾아보세요.</>}
          sub="전국 80여 개 매장에서 같은 시간에, 같은 정성으로 빵을 굽고 있습니다."
          crumbs="Stores"
        />

        <section id="flagship" className="section" style={{ background: 'var(--paper)' }}>
          <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              marginBottom: 48,
              paddingBottom: 28,
              borderBottom: '1px solid var(--hairline)',
              alignItems: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--serif-en)',
                fontStyle: 'italic',
                fontSize: 13,
                color: 'var(--brown)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginRight: 16,
              }}>Filter ·</span>
              {['전체', ...REGIONS].map(r => (
                <button
                  key={r}
                  onClick={() => setActive(r)}
                  style={{
                    padding: '10px 20px',
                    border: '1px solid ' + (active === r ? 'var(--brown-deep)' : 'var(--hairline)'),
                    background: active === r ? 'var(--brown-deep)' : 'transparent',
                    color: active === r ? 'var(--cream)' : 'var(--ink)',
                    fontFamily: 'var(--sans-kr)',
                    fontSize: 13.5,
                    borderRadius: 999,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >{r}</button>
              ))}
            </div>

            <ul className="press" style={{ marginBottom: 0 }}>
              {filtered.map((s, i) => (
                <li key={s.name} className="press__row" style={{ gridTemplateColumns: '60px 220px 1fr 140px 120px' }}>
                  <div className="press__num">N° {String(i + 1).padStart(2, '0')}</div>
                  <div className="press__src">
                    {s.name}
                    <div style={{
                      fontFamily: 'var(--serif-en)',
                      fontStyle: 'italic',
                      fontSize: 11,
                      color: s.tag === 'Flagship' ? 'var(--brown-deep)' : 'var(--brown)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                      fontWeight: 400,
                    }}>· {s.tag}</div>
                  </div>
                  <div className="press__label">{s.address}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>{s.hours}</div>
                  <div className="press__year" style={{ textAlign: 'right' }}>
                    <a href="#" style={{
                      fontFamily: 'var(--serif-kr)',
                      fontSize: 13,
                      color: 'var(--brown-deep)',
                      fontStyle: 'normal',
                      borderBottom: '1px solid var(--brown-deep)',
                      paddingBottom: 2,
                    }}>길찾기 →</a>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: 60,
              padding: 32,
              background: 'var(--cream-soft)',
              border: '1px solid var(--hairline)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div>
                <div style={{ fontFamily: 'var(--serif-kr)', fontSize: 18, marginBottom: 6 }}>
                  전체 매장 리스트가 더 궁금하신가요?
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>
                  전국 80여 개 매장 — PDF로 받아보실 수 있습니다.
                </div>
              </div>
              <a href="#" className="btn btn--brown">전체 매장 PDF<span className="arrow"></span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
