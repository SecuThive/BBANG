const VOICES = [
  {
    quote: '아침마다 빵뜨락 식빵으로 하루를 시작합니다. 7년째 같은 맛, 같은 정성이라는 게 정말 신기해요.',
    name: '이○○ 고객님',
    meta: '성수 본점 · 7년 단골',
  },
  {
    quote: '아이가 알러지가 있어 빵을 못 먹였는데, 빵뜨락 식빵은 안심하고 먹입니다. 재료를 믿을 수 있는 곳.',
    name: '박○○ 고객님',
    meta: '판교점 · 4년 단골',
  },
  {
    quote: '출근길마다 한남점에 들러 크루아상을 사 갑니다. 매일 같은 시간에 같은 결의 페이스트리가 나온다는 게 정말 대단해요.',
    name: '최○○ 고객님',
    meta: '한남점 · 매일 단골',
  },
];

export default function Voices() {
  return (
    <section className="section voices" id="voices">
      <div className="voices__head">
        <div className="section__eyebrow">Voices</div>
        <h2 className="voices__title">
          오래도록, 같은 자리에서.
        </h2>
      </div>

      <div className="voices__grid">
        {VOICES.map((v, i) => (
          <figure key={i} className="voice">
            <div className="voice__quote-mark" aria-hidden="true">&ldquo;</div>
            <blockquote className="voice__quote">{v.quote}</blockquote>
            <figcaption className="voice__cap">
              <div className="voice__name">{v.name}</div>
              <div className="voice__meta">{v.meta}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
