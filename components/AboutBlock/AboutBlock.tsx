'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AboutBlock.module.css';

export default function AboutBlock() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
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
    <section className={styles.wrapper}>
      <div className={`${styles.card} ${isVisible ? styles.visible : ''}`} ref={cardRef}>
        <h2 className={styles.title}>Ka1roxx – Це Про Твій Бізнес.</h2>
        <p className={styles.text}>
          Ми створили не просто сайти, а платформу для росту твого бізнесу онлайн. Тут малий бізнес
          знаходить клієнтів, створює свій образ і просто швидко стартує.{' '}
          <span className={styles.highlight}>Ka1roxx</span> – це твій новий сайт у світі малого бізнесу.
        </p>
      </div>
    </section>
  );
}