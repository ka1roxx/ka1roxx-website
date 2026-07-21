import Logo from '@/components/Logo/Logo';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.content}>
        <Logo size="large" interactive={false} />
        <p className={styles.subtitle}>
          Робіть собі портфоліо і показуйте вашим клієнтам ваш рівень роботи
        </p>
        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>Наші послуги</a>
          <a href="#contact" className={styles.secondaryLink}>Контакти -&gt;</a>
        </div>
      </div>
    </section>
  );
}