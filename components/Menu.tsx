import Link from 'next/link';

const MENU_ITEMS = [
  { cat: 'Daily Bread', name: '우유 식빵', desc: '국내산 밀과 1A 등급 우유로 18시간 저온 숙성한 식빵.', price: '4,800', tone: 'tone-1' },
  { cat: 'Pastry', name: '버터 크루아상', desc: '프랑스산 발효버터를 81겹으로 접어 구워낸 시그니처.', price: '3,800', tone: 'tone-2' },
  { cat: 'Classic', name: '옛날 단팥빵', desc: '국내산 적두를 12시간 천천히 졸여낸 통팥 앙금.', price: '2,500', tone: 'tone-3' },
  { cat: 'Cake', name: '바닐라 시폰 케이크', desc: '마다가스카르 바닐라빈과 생크림의 부드러운 결.', price: '28,000', tone: 'tone-4' },
];

export default function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Signature Menu</div>
          <h2 className="section__title">
            오늘, 가장 먼저<br />
            구워낸 빵.
          </h2>
        </div>
        <p className="section__lead">
          식빵부터 페이스트리, 단팥빵, 케이크까지 — 빵뜨락이 매일 매장에서 직접
          굽는 시그니처 라인업. 좋은 재료의 본연의 맛을 가장 정직하게 담아냅니다.
        </p>
      </div>

      <div className="menu__grid">
        {MENU_ITEMS.map((item, i) => (
          <article key={item.name} className="menu-card">
            <div className={`menu-card__img ${item.tone}`}>
              <div className="menu-card__num">N° {String(i + 1).padStart(2, '0')}</div>
              <div className="menu-card__placeholder">[ Product Image ]</div>
            </div>
            <div className="menu-card__body">
              <div className="menu-card__cat">{item.cat}</div>
              <h3 className="menu-card__name">{item.name}</h3>
              <p className="menu-card__desc">{item.desc}</p>
              <div className="menu-card__foot">
                <span>매일 매장 직접 베이킹</span>
                <span className="price">₩ {item.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="menu__cta">
        <Link href="/menu" className="btn btn--outline">
          전체 메뉴 보기
          <span className="arrow"></span>
        </Link>
      </div>
    </section>
  );
}
