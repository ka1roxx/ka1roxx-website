'use client';

import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo/Logo';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const linkTo = (hash: string) => (isHome ? hash : `/${hash}`);

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
    </header>
  );
}