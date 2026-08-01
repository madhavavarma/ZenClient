import React from 'react';
import { MapPin, Search, ShoppingCart, User } from 'lucide-react';
import styles from './Navbar.module.css';
import '../../styles/colors.css';

type Props = {
  brand?: string;
  location?: string;
  cartCount?: number;
  onSearch?: (query: string) => void;
  onLogin?: () => void;
  onCartClick?: () => void;
};

export default function Navbar({
  brand = 'MILLETVAAN',
  location = 'New York, NY',
  cartCount = 0,
  onSearch,
  onLogin,
  onCartClick,
}: Props) {
  const [query, setQuery] = React.useState('');

  return (
    <header className={styles.navbar}>
      <div className={styles.pageLayout}>
        <div className={styles.left}>
          <a href="/" className={styles.logo} aria-label={`Go to ${brand} home`}>
            <span className={styles.logoCircle}>M</span>
            <span>{brand}</span>
          </a>
        </div>

        <form
        className={styles.searchForm}
        onSubmit={(event) => {
          event.preventDefault();
          onSearch?.(query);
        }}
        role="search"
        aria-label="Site search"
      >
        <Search size={18} color="var(--text-muted)" />
        <input
          className={styles.searchInput}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products, categories, or help"
          aria-label="Search products"
        />
      </form>

        <div className={styles.actions}>
          <button className={`${styles.iconButton} ${styles.addressButton}`} type="button" aria-label={`Location: ${location}`}>
            <MapPin size={18} />
          </button>

          <button className={styles.iconButton} onClick={onCartClick} aria-label="Open cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>

          <button className={styles.iconButton} onClick={onLogin} type="button" aria-label="Login">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
