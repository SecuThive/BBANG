import Link from 'next/link';

interface PageHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  crumbs: string;
}

export default function PageHead({ eyebrow, title, sub, crumbs }: PageHeadProps) {
  return (
    <header className="page-head">
      <div className="page-head__bg" aria-hidden="true"></div>
      <div className="page-head__inner">
        <div>
          <div className="page-head__eyebrow">{eyebrow}</div>
          <h1 className="page-head__title">{title}</h1>
          {sub && <p className="page-head__sub">{sub}</p>}
        </div>
        <div className="page-head__crumbs">
          <Link href="/" style={{ opacity: 0.7 }}>Home</Link><br />
          <strong>{crumbs}</strong>
        </div>
      </div>
    </header>
  );
}
