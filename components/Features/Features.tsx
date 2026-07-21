'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5S15.5 16.4 15.5 20" />
        <path d="M16 8.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5" />
        <path d="M17.5 14.2c2.3.5 4 2.6 4 5.1" />
      </svg>
    ),
    title: 'Живий Дизайн',
    text: 'Сайт — це обличчя твого бізнесу. Знаходь нових клієнтів, розповідай про себе, показуй роботи чи товари. Дизайн — ключ до довіри.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7.5" width="18" height="12" rx="2" />
        <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
        <path d="M3 12.5h18" />
      </svg>
    ),
    title: 'Реальне Управління',
    text: 'Всі заявки з сайту приходять прямо в Telegram. Жодних складних панелей — керуй клієнтами там, де тобі зручно.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="9" height="12" rx="1.5" />
        <circle cx="17.5" cy="16.5" r="3.5" />
        <path d="M15.8 19.5 15 22l2.5-1.3L20 22l-.8-2.5" />
      </svg>
    ),
    title: 'Чесні Умови',
    text: 'Прозорі тарифи без прихованих платежів. Обираєш план, отримуєш сайт, домен і підтримку — без зайвих витрат.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
        Де Простий Сайт Зустрічається<br />З Реальними Клієнтами.
      </h2>
      <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
        Занурся у сайт, який працює на твій бізнес. Приваблюй клієнтів, показуй свої послуги, отримуй заявки.
        Все це — на чистій сучасній основі з розумними рішеннями, без зайвих складнощів і переплат.
      </p>
      <div className={styles.grid}>
        {features.map((item, index) => (
          <div
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: isVisible ? `${0.15 + index * 0.1}s` : '0s' }}
            key={item.title}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}