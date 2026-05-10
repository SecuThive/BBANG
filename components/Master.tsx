export default function Master() {
  return (
    <section className="section master" id="master">
      <div className="master__inner">
        <div className="master__portrait" role="img" aria-label="마스터 베이커 김도윤 — 흑백 인물 사진 placeholder">
          <div className="master__portrait-tag">Master Baker</div>
          <div className="master__portrait-name">
            <span>金 道 潤</span>
            <small>Kim Do-yoon</small>
          </div>
          <div className="master__portrait-label">[ 흑백 인물 컷 — 작업복, 화덕 앞 ]</div>
        </div>

        <div className="master__copy">
          <div className="section__eyebrow">The Artisan</div>
          <h2 className="master__title">
            &ldquo;저는 28년째,<br />
            매일 같은 시간에<br />
            반죽을 시작합니다.&rdquo;
          </h2>

          <p className="master__quote">
            도쿄 제과학교를 졸업하고 파리 Lenôtre, 서울 신라호텔 베이커리를 거쳐
            2014년 빵뜨락을 시작했습니다. 좋은 빵의 비밀은 화려한 기술이 아니라,
            매일 같은 시간에 반죽을 시작하는 정직한 반복이라고 믿습니다.
          </p>

          <div className="master__credits">
            <div className="credit">
              <div className="credit__year">1998</div>
              <div className="credit__txt">日本 製菓専門学校 卒業<br />Tokyo Confectionery School</div>
            </div>
            <div className="credit">
              <div className="credit__year">2003</div>
              <div className="credit__txt">Lenôtre Paris<br />Boulangerie chef de partie</div>
            </div>
            <div className="credit">
              <div className="credit__year">2008</div>
              <div className="credit__txt">서울 신라호텔<br />수석 베이커</div>
            </div>
            <div className="credit">
              <div className="credit__year">2014</div>
              <div className="credit__txt">빵뜨락 오픈<br />성수동 1호점</div>
            </div>
          </div>

          <div className="master__sig">
            <svg viewBox="0 0 200 60" aria-hidden="true">
              <path
                d="M10,40 C20,15 35,15 45,30 C50,38 55,30 60,25 C70,15 80,40 95,30 C110,20 120,45 135,30 C148,18 165,28 175,38 C180,42 188,40 192,35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="master__sig-cap">
              <small>SIGNATURE</small>
              김도윤 · Master Baker
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
