import Logo from '@/components/Logo/Logo';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.content}>
        <Logo size="large" interactive={false} />
        <p className={styles.description}>
          Створи свій лендінг
        </p>
        <p className={styles.subtitle}>
          Зробіть собі сайт-портфоліо та показуйте свої послуги в інтернеті. Ми допоможемо вам створити сучасний та ефективний веб-сайт, який відображає ваші навички або залучає нових клієнтів. 
        </p>
        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>Наші послуги</a>
          <a href="#contact" className={styles.secondaryLink}>Контакти -&gt;</a>
        </div>
      </div>
    </section>
  );
}