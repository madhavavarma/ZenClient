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
  brand = 'Zen',
  location = 'New York, NY',
  cartCount = 0,
  onSearch,
  onLogin,
  onCartClick,
}: Props) {
  const [query, setQuery] = React.useState('');

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoCircle}>Z</span>
          <span>{brand}</span>
        </div>
      </div>

      <form
        className={styles.searchForm}
        onSubmit={(event) => {
          event.preventDefault();
          onSearch?.(query);
        }}
        role="search"
      >
        <Search size={18} color="var(--text-muted)" />
        <input
          className={styles.searchInput}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products, categories, or help"
          aria-label="Search"
        />
      </form>

      <div className={styles.actions}>
        <button className={styles.iconButton} onClick={onCartClick} aria-label="Open cart">
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </button>

        <button className={styles.loginButton} onClick={onLogin} type="button">
          <User size={18} />
          <span>Login</span>
        </button>
      </div>

      <div className={styles.address}>
        <MapPin size={16} />
        <div>
          <div className={styles.addressLabel}>Deliver to</div>
          <div className={styles.addressLocation}>{location}</div>
        </div>
      </div>
    </header>
  );
}
