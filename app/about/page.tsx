import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHead from '@/components/PageHead';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '브랜드 소개 — 빵뜨락' };

const TIMELINE = [
  { year: '2014', title: '성수동 1호점 오픈', desc: '12평 작은 공간, 새벽 4시 30분에 첫 반죽이 시작된 날.' },
  { year: '2017', title: '국내산 우리밀 100% 전환', desc: '비용보다 신뢰. 전 매장의 식빵·바게트가 우리밀로 바뀌었습니다.' },
  { year: '2019', title: '20호점 · 베이킹 아카데미 개소', desc: '본사 직영 아카데미에서 점주 교육 시작.' },
  { year: '2022', title: '월간 베이커리 大賞 수상', desc: '"12년째 변하지 않은 새벽의 정성"을 기록한 해.' },
  { year: '2024', title: '전국 80호점 돌파', desc: '한 매장씩, 천천히, 같은 정성으로.' },
  { year: '2026', title: 'Today', desc: '오늘도 같은 시간에, 화덕에 불이 들어옵니다.' },
];

const VALUES = [
  { en: 'Honesty', kr: '정직', desc: '재료를 속이지 않습니다. 가격이 아닌 신뢰를 비교합니다.' },
  { en: 'Repetition', kr: '반복', desc: '12년 동안 같은 시간에, 같은 방식으로. 변화하지 않는 용기.' },
  { en: 'Warmth', kr: '온기', desc: '갓 구운 빵 한 조각이 누군가의 아침을 따뜻하게 만든다고 믿습니다.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          eyebrow="About"
          title={<>변하지 않는 정성,<br />빵뜨락 이야기.</>}
          sub="2014년 성수동의 작은 빵집에서 시작해, 80여 개 매장이 되기까지 — 빵뜨락의 12년은 단 하나의 약속 위에 쌓아 올려졌습니다."
          crumbs="About"
        />

        <section className="section about">
          <div className="about__grid">
            <div className="about__img" role="img" aria-label="새벽의 빵뜨락 매장 placeholder">
              <div className="about__img-tag">N° 01 — Origin</div>
              <div className="about__img-label">[ 1호점 외관 / 빵 클로즈업 ]</div>
            </div>
            <div className="about__copy">
              <h3>한 끼의 따뜻함이<br />하루를 바꾼다고 믿습니다.</h3>
              <p>
                빵뜨락은 마스터 베이커 김도윤이 28년의 베이커리 경력 끝에 시작한 브랜드입니다.
                파리 Lenôtre, 서울 신라호텔 베이커리를 거치며 배운 것은 — 좋은 빵의 비밀이
                화려한 기술이 아니라, 매일 같은 시간에 반죽을 시작하는 정직한 반복이라는 사실이었습니다.
              </p>
              <p>
                우리는 빠르게 성장하기보다 천천히 단단하게 자라기를 선택했습니다.
                한 해에 무리한 매장 확장 대신, 한 매장 한 매장의 품질을 지키는 것 — 그것이
                80여 개 매장에서 같은 빵 맛을 유지할 수 있는 유일한 방법입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section process" style={{ background: 'var(--paper)' }}>
          <div className="section__head">
            <div>
              <div className="section__eyebrow">Our Values</div>
              <h2 className="section__title">세 글자의<br />약속.</h2>
            </div>
            <p className="section__lead">
              거창한 비전이 아닌, 매일을 지탱하는 단순한 세 단어.
              정직(正直)과 반복(反復)과 온기(溫氣).
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            maxWidth: 'var(--max)',
            margin: '0 auto',
            background: 'var(--cream-soft)',
            border: '1px solid var(--hairline)',
          }}>
            {VALUES.map((v, i) => (
              <div key={v.en} style={{
                padding: '56px 36px',
                borderRight: i < VALUES.length - 1 ? '1px solid var(--hairline)' : undefined,
              }}>
                <div style={{
                  fontFamily: 'var(--serif-en)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  letterSpacing: '0.3em',
                  color: 'var(--brown)',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                }}>N° 0{i + 1} · {v.en}</div>
                <h3 style={{
                  fontFamily: 'var(--serif-kr)',
                  fontWeight: 500,
                  fontSize: 36,
                  margin: '0 0 18px',
                  color: 'var(--ink)',
                }}>{v.kr}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="story" className="section" style={{ background: 'var(--cream-soft)', borderTop: '1px solid var(--hairline)' }}>
          <div className="section__head">
            <div>
              <div className="section__eyebrow">Our Journey</div>
              <h2 className="section__title">한 해, 한 해<br />천천히 자라온 길.</h2>
            </div>
            <p className="section__lead">
              화려한 마케팅이 아닌, 매장 하나하나의 신뢰가 쌓여 온 12년의 기록입니다.
            </p>
          </div>
          <ol style={{ maxWidth: 920, margin: '0 auto', padding: 0, listStyle: 'none', borderTop: '1px solid var(--hairline)' }}>
            {TIMELINE.map((t, i) => (
              <li key={t.year} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 32,
                padding: '36px 0',
                borderBottom: '1px solid var(--hairline)',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'var(--serif-en)',
                  fontSize: 32,
                  color: i === TIMELINE.length - 1 ? 'var(--brown-deep)' : 'var(--brown)',
                  letterSpacing: '0.05em',
                  fontStyle: i === TIMELINE.length - 1 ? 'italic' : 'normal',
                }}>{t.year}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--serif-kr)', fontWeight: 500, fontSize: 21, margin: '0 0 8px', color: 'var(--ink)' }}>{t.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
