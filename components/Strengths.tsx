const STRENGTH_ITEMS = [
  {
    en: 'Daily Production',
    title: '매일 생산',
    desc: '전 매장에서 새벽 4시 30분에 반죽을 시작해, 매일 신선한 빵만 판매합니다. 전일 재고는 남기지 않습니다.',
  },
  {
    en: 'Selected Ingredients',
    title: '엄선된 재료',
    desc: '국내산 우리밀, 프랑스 AOP 발효버터, 마다가스카르 바닐라 — 재료가 곧 맛이라는 원칙.',
  },
  {
    en: 'Warm Atmosphere',
    title: '따뜻한 매장 분위기',
    desc: '오크 우드와 따뜻한 조명. 갓 구운 빵 향이 머무는 공간 — 동네의 작은 빵집을 닮은 인테리어.',
  },
  {
    en: 'Crafted Heritage',
    title: '오랜 시간의 정성',
    desc: '2014년부터 변하지 않은 새벽 4시 30분의 시작. 시간이 만든 한결같은 빵 맛 — 이것이 빵뜨락의 가장 큰 자산입니다.',
  },
];

export default function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">Our Promise</div>
          <h2 className="section__title">
            변하지 않는 네 가지<br />
            빵뜨락의 약속.
          </h2>
        </div>
        <p className="section__lead">
          오랜 시간 같은 자리에서, 같은 정성으로. 빵뜨락이 80여 개 매장에서
          한결같은 신뢰를 만들어 온 네 가지 원칙입니다.
        </p>
      </div>

      <div className="strengths__grid">
        {STRENGTH_ITEMS.map((s, i) => (
          <div key={s.title} className="strength">
            <div className="strength__num">N° 0{i + 1}</div>
            <h3 className="strength__title">
              <em>{s.en}</em>
              {s.title}
            </h3>
            <p className="strength__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
