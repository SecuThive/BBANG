import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="footer__grid">
        <div className="footer__brand">
          <h4>빵뜨락 · BBANG-TTEURAK</h4>
          <p>
            매일 아침, 정직하게 구워내는 따뜻한 빵.<br />
            2014년부터 한결같이 — 좋은 재료와 정성으로.
          </p>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#d6b98e', fontSize: 14, letterSpacing: '0.15em' }}>
            Daily 06:00 — Fresh from the oven.
          </div>
        </div>

        <div className="footer__col">
          <h5>Brand</h5>
          <ul>
            <li><Link href="/about">브랜드 소개</Link></li>
            <li><Link href="/menu">메뉴</Link></li>
            <li><Link href="/stores">매장 안내</Link></li>
            <li><Link href="/about#story">소식</Link></li>
          </ul>
        </div>

        {/* Business / 창업 관련 컬럼 — 일시 비공개 */}

        <div className="footer__col">
          <h5>Visit</h5>
          <ul>
            <li><Link href="/stores">전체 매장 안내</Link></li>
            <li><Link href="/stores#flagship">성수 본점</Link></li>
            <li><Link href="/menu">시그니처 메뉴</Link></li>
            <li>매일 06:00 — 22:00</li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact</h5>
          <ul>
            <li>고객센터 1588-0000</li>
            <li>평일 09:00 — 18:00</li>
            <li><Link href="/support">고객센터 바로가기</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div>© 2026 빵뜨락 BBANG-TTEURAK. All rights reserved.</div>
        <div>서울특별시 성동구 성수일로 ○○ · 사업자등록번호 000-00-00000</div>
      </div>
    </footer>
  );
}
