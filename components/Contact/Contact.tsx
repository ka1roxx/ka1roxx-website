'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setStatus('Заповніть імʼя та телефон');
      return;
    }

    // TODO: тут пізніше буде відправка в Telegram-бота через API
    setIsSubmitting(true);
    setStatus('');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Дякуємо! Ми звʼяжемось з вами найближчим часом.');
      setName('');
      setPhone('');
    }, 600);
  };

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>Зв&apos;яжіться з нами</h2>
      <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>Telegram, або телефон</p>

      <form className={`${styles.form} ${isVisible ? styles.visible : ''}`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ім'я"
          className={styles.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="tel"
          placeholder="+380XXXXXXXXX"
          className={styles.input}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Надсилаємо...' : 'Надіслати'}
        </button>
        <p className={styles.status}>{status}</p>
      </form>
    </section>
  );
}