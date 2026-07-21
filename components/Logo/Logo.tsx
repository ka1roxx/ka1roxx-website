'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'small' | 'large';
  interactive?: boolean;
}

export default function Logo({ size = 'small', interactive = true }: LogoProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const handleClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const content = (
    <>
      <img src="/logo.svg" alt="" className={styles.icon} />
      <span className={styles.text}>Ka1roxx</span>
    </>
  );

  const className = `${styles.logo} ${size === 'large' ? styles.large : ''} ${interactive ? styles.clickable : ''}`;

  if (interactive) {
    return (
      <button onClick={handleClick} className={className} aria-label="На головну">
        {content}
      </button>
    );
  }

  return <div className={className}>{content}</div>;
}