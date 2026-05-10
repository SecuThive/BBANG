export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <div>
          <div className="section__eyebrow">About 빵뜨락</div>
          <h2 className="section__title">
            좋은 재료,<br />
            정직한 공정,<br />
            매일 구워내는 신선함.
          </h2>
        </div>
        <p className="section__lead">
          새벽이 시작될 때, 빵뜨락의 화덕에는 가장 먼저 불이 들어옵니다.
          좋은 밀가루와 발효, 그리고 정성스러운 손길 — 변하지 않는 세 가지 약속이
          오늘도 따뜻한 빵 한 조각이 됩니다.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__img" role="img" aria-label="새벽의 빵뜨락 매장 — 흑백 사진 placeholder">
          <div className="about__img-tag">N° 01 — Atelier</div>
          <div className="about__img-label">[ Imagery placeholder · 매장 인테리어 / 빵 클로즈업 ]</div>
        </div>

        <div className="about__copy">
          <h3>한 끼의 따뜻함이<br />하루를 바꾼다고 믿습니다.</h3>
          <p>
            빵뜨락은 2014년, 동네의 작은 베이커리에서 시작되었습니다.
            12년이 지난 지금도 변함없이 — 새벽 4시 30분에 반죽을 시작하고,
            오전 6시에 가장 신선한 빵을 매대에 올립니다.
          </p>
          <p>
            국내산 밀과 천연 발효종, 그리고 매장에서 직접 굽는 로컬 베이킹.
            대량 생산이 아닌, 매일의 반복이 만드는 신뢰. 그것이 빵뜨락이
            전국 80여 개 매장으로 성장할 수 있었던 이유입니다.
          </p>

          <div className="about__sig">
            <div>
              <small>Master Baker</small>
              김 도 윤
            </div>
            <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }}></div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
              Since 2014
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
