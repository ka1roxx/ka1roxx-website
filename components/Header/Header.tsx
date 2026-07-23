'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo/Logo';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkTo = (hash: string) => (isHome ? hash : `/${hash}`);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoCol}>
        <Logo size="small" />
      </div>

      <nav className={styles.nav}>
        <a href={linkTo('#about')} className={styles.navLink}>Про Нас</a>
        <a href={linkTo('#pricing')} className={styles.navLink}>Послуги</a>
        <a href={linkTo('#contact')} className={styles.navLink}>Контакти</a>
      </nav>

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
        aria-expanded={isMenuOpen}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href={linkTo('#about')} className={styles.mobileNavLink} onClick={closeMenu}>Про Нас</a>
        <a href={linkTo('#pricing')} className={styles.mobileNavLink} onClick={closeMenu}>Послуги</a>
        <a href={linkTo('#contact')} className={styles.mobileNavLink} onClick={closeMenu}>Контакти</a>
      </div>
    </header>
  );
}