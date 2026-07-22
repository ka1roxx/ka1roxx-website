'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Basic',
    price: 40,
    oldPrice: 50,
    features: [
      'Сайт-портфоліо з повною інформацією про бізнес',
      'Підбір і підключення домену',
      'Telegram-бот для заявок з сайту',
    ],
    cta: 'Замовити за $40',
    featured: false,
  },
  {
    name: 'Premium',
    price: 64,
    oldPrice: 80,
    features: [
      'Сайт-портфоліо з повною інформацією про бізнес',
      'Підбір і підключення домену',
      'Telegram-бот для заявок з сайту',
      'Технічна підтримка',
      '1 місяць хостингу безкоштовно, далі $10/міс',
    ],
    cta: 'Замовити за $64',
    featured: true,
  },
];

export default function Pricing() {
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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="pricing" ref={sectionRef}>
      <h2 className={styles.title}>Готові отримати свій сайт?</h2>
      <p className={styles.subtitle}>Оберіть план, який підходить вашому бізнесу</p>
      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`${styles.card} ${plan.featured ? styles.featured : ''} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: isVisible ? `${index * 0.1}s` : '0s' }}
          >
            <span className={styles.planName}>{plan.name}</span>
            <div className={styles.priceRow}>
              <span className={styles.price}>${plan.price}</span>
              <span className={styles.oldPrice}>${plan.oldPrice}</span>
            </div>
            <ul className={styles.list}>
              {plan.features.map((feature) => (
                <li className={styles.listItem} key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className={styles.cta}>{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}