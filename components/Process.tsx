const STEPS = [
  { time: '04:30', en: 'Mix', kr: '반죽', desc: '국내산 우리밀과 천연 발효종을 손으로 혼합. 반죽 온도는 24℃ — 사람의 손과 가장 닮은 온도.' },
  { time: '05:00', en: 'Ferment', kr: '1차 발효', desc: '저온 숙성 18시간. 시간이 만드는 맛은 결코 흉내낼 수 없습니다.' },
  { time: '05:45', en: 'Shape', kr: '성형', desc: '한 덩이씩 손으로 나누고 모양을 잡습니다. 기계가 아닌 손의 무게로.' },
  { time: '06:00', en: 'Bake', kr: '베이킹', desc: '230℃ 화덕에서 22분. 가장 신선한 빵이 매대에 오릅니다.' },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">The Daily Craft</div>
          <h2 className="section__title">
            새벽 4시 30분.<br />
            빵뜨락의 하루는<br />
            가장 먼저 시작됩니다.
          </h2>
        </div>
        <p className="section__lead">
          정직한 빵에는 지름길이 없습니다. 18시간 저온 숙성, 230℃ 화덕,
          그리고 매장에서 직접 굽는 로컬 베이킹 — 12년간 변하지 않은
          빵뜨락의 하루를 시간 순서대로 보여드립니다.
        </p>
      </div>

      <div className="process__rail">
        <div className="process__line" aria-hidden="true"></div>
        {STEPS.map((s, i) => (
          <div key={s.en} className="step">
            <div className="step__time">
              <span className="dot" aria-hidden="true"></span>
              {s.time}
              <small>AM</small>
            </div>
            <div className="step__num">N° 0{i + 1}</div>
            <h3 className="step__title">
              <em>{s.en}</em>
              {s.kr}
            </h3>
            <p className="step__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
