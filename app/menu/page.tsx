import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHead from '@/components/PageHead';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '메뉴 — 빵뜨락' };

const CATEGORIES = [
  {
    cat: 'Daily Bread · 식빵',
    desc: '국내산 우리밀과 18시간 저온 숙성. 매일 매장 직접 베이킹.',
    items: [
      { name: '우유 식빵', desc: '1A 우유 · 18시간 숙성', price: '4,800', tone: 'tone-1' },
      { name: '통밀 식빵', desc: '국내산 통밀 100%', price: '5,200', tone: 'tone-2' },
      { name: '버터 식빵', desc: '프랑스 AOP 발효버터', price: '5,800', tone: 'tone-3' },
      { name: '호밀 캄파뉴', desc: '천연 발효종 · 묵직한 산미', price: '6,500', tone: 'tone-4' },
    ],
  },
  {
    cat: 'Pastry · 페이스트리',
    desc: '버터를 손으로 접고, 화덕에서 굽는 정통 프렌치 페이스트리.',
    items: [
      { name: '버터 크루아상', desc: 'AOP 버터 81겹 · 시그니처', price: '3,800', tone: 'tone-2' },
      { name: '아몬드 크루아상', desc: '구운 아몬드 크림 충전', price: '4,500', tone: 'tone-1' },
      { name: '뺑 오 쇼콜라', desc: '벨기에 다크 초콜릿 2줄', price: '4,200', tone: 'tone-3' },
      { name: '큐브 데니쉬', desc: '바닐라 크렘 · 사각 크러스트', price: '4,800', tone: 'tone-4' },
    ],
  },
  {
    cat: 'Classic · 한국식 빵',
    desc: '단팥빵 · 소보로 · 크림빵 — 한국의 시간을 담은 빵뜨락만의 옛날 맛.',
    items: [
      { name: '옛날 단팥빵', desc: '국내산 적두 12시간 졸인 통팥', price: '2,500', tone: 'tone-3' },
      { name: '소보로빵', desc: '바삭한 토핑 · 부드러운 빵', price: '2,300', tone: 'tone-1' },
      { name: '크림빵', desc: '우유 커스터드 듬뿍', price: '2,800', tone: 'tone-2' },
      { name: '모카번', desc: '커피 토핑 · 버터 크림', price: '3,200', tone: 'tone-4' },
    ],
  },
  {
    cat: 'Cake · 케이크',
    desc: '주문 제작도 가능합니다. 매장 또는 빵뜨락 앱에서 예약하세요.',
    items: [
      { name: '바닐라 시폰', desc: '마다가스카르 바닐라빈', price: '28,000', tone: 'tone-1' },
      { name: '딸기 생크림', desc: '국산 딸기 · 우유 생크림', price: '38,000', tone: 'tone-2' },
      { name: '얼그레이 무스', desc: '프렌치 얼그레이 인퓨전', price: '32,000', tone: 'tone-3' },
      { name: '치즈 케이크', desc: '뉴욕 클래식 · 노블 사이즈', price: '24,000', tone: 'tone-4' },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          eyebrow="Signature Menu"
          title={<>오늘, 매장에서<br />가장 먼저 구운 빵.</>}
          sub="식빵부터 페이스트리, 한국식 단팥빵, 케이크까지 — 빵뜨락이 매일 매장에서 직접 굽는 시그니처 라인업."
          crumbs="Menu"
        />

        {CATEGORIES.map((c, ci) => (
          <section key={c.cat} className="section menu" style={{
            background: ci % 2 === 0 ? 'var(--paper)' : 'var(--cream-soft)',
            borderBottom: '1px solid var(--hairline)',
            paddingTop: 'clamp(60px, 8vw, 100px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
          }}>
            <div className="section__head">
              <div>
                <div className="section__eyebrow">N° 0{ci + 1}</div>
                <h2 className="section__title">{c.cat}</h2>
              </div>
              <p className="section__lead">{c.desc}</p>
            </div>
            <div className="menu__grid">
              {c.items.map((item, i) => (
                <article key={item.name} className="menu-card">
                  <div className={`menu-card__img ${item.tone}`}>
                    <div className="menu-card__num">N° {String(i + 1).padStart(2, '0')}</div>
                    <div className="menu-card__placeholder">[ Product Image ]</div>
                  </div>
                  <div className="menu-card__body">
                    <div className="menu-card__cat">매일 매장 베이킹</div>
                    <h3 className="menu-card__name">{item.name}</h3>
                    <p className="menu-card__desc">{item.desc}</p>
                    <div className="menu-card__foot">
                      <span>Fresh today</span>
                      <span className="price">₩ {item.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
