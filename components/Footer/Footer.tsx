'use client';

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const contactHref = isHome ? '#contact' : '/#contact';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.links}>
          <a href="/privacy" className={styles.link}>Політика конфіденційності</a>
          <a href={contactHref} className={styles.link}>Контакти</a>
        </nav>
        <span className={styles.credit}>by Ka1roxx development</span>
      </div>
    </footer>
  );
}