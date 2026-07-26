import React from 'react';

type NavItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type Props = {
  brand?: string;
  items?: NavItem[];
};

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    background: '#0f172a',
    color: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  brand: {
    fontWeight: 700,
    fontSize: 18
  },
  nav: {
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    padding: '6px 8px',
    borderRadius: 6,
    cursor: 'pointer'
  },
  linkHover: {
    color: '#fff',
    background: 'rgba(255,255,255,0.04)'
  }
};

export default function Navbar({ brand = 'Zen', items = [] }: Props) {
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);

  return (
    <header style={styles.container}>
      <div style={styles.brand}>{brand}</div>
      <nav style={styles.nav} aria-label="main navigation">
        {items.length === 0 ? (
          <>
            <a style={styles.link} href="#" onClick={e => e.preventDefault()}>Home</a>
            <a style={styles.link} href="#" onClick={e => e.preventDefault()}>About</a>
            <a style={styles.link} href="#" onClick={e => e.preventDefault()}>Contact</a>
          </>
        ) : (
          items.map((it, idx) => (
            <a
              key={idx}
              href={it.href ?? '#'}
              onClick={e => {
                if (it.onClick) {
                  e.preventDefault();
                  it.onClick();
                }
              }}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                ...styles.link,
                ...(hoverIdx === idx ? styles.linkHover : {})
              }}
            >
              {it.label}
            </a>
          ))
        )}
      </nav>
    </header>
  );
}
