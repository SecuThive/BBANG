const PRESS = [
  { src: '동아일보', label: '"12년째 변하지 않은 새벽의 정성"', year: '2025.03' },
  { src: '월간 베이커리', label: '올해의 베이커리 브랜드 大賞', year: '2024.11' },
  { src: 'Time Out Seoul', label: 'Best Bakery in Seoul', year: '2024.06' },
  { src: 'KBS 생활의 달인', label: '발효 18시간의 비밀', year: '2023.09' },
];

const CERTS = [
  { kr: '국내산 우리밀 인증', en: 'Korean Wheat Certified' },
  { kr: 'HACCP 식품안전 인증', en: 'HACCP Certified' },
  { kr: '프랑스 AOP 발효버터', en: 'AOP Beurre' },
  { kr: '천연 발효종 사용', en: 'Natural Levain' },
];

export default function Awards() {
  return (
    <section className="section awards" id="awards">
      <div className="awards__top">
        <div className="section__eyebrow">Press &amp; Recognition</div>
        <h2 className="awards__title">
          12년의 정성을<br />
          기록해온 이름들.
        </h2>
      </div>

      <ul className="press">
        {PRESS.map((p, i) => (
          <li key={p.src} className="press__row">
            <div className="press__num">N° 0{i + 1}</div>
            <div className="press__src">{p.src}</div>
            <div className="press__label">{p.label}</div>
            <div className="press__year">{p.year}</div>
          </li>
        ))}
      </ul>

      <div className="certs">
        <div className="certs__head">정직한 재료, 검증된 신뢰</div>
        <div className="certs__grid">
          {CERTS.map(c => (
            <div key={c.kr} className="cert">
              <div className="cert__seal" aria-hidden="true">
                <span></span>
              </div>
              <div className="cert__kr">{c.kr}</div>
              <div className="cert__en">{c.en}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
