'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

console.log('DEBUG API_URL:', API_URL);
console.log('DEBUG SITE_KEY:', SITE_KEY);

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setStatus('Заповніть імʼя та телефон');
      return;
    }

    if (!API_URL || !SITE_KEY) {
      setStatus('Форма тимчасово недоступна, спробуйте пізніше');
      console.error('NEXT_PUBLIC_API_URL або NEXT_PUBLIC_SITE_KEY не задані в .env.local');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(`${API_URL}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site_key: SITE_KEY,
          name: name.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? 'Помилка відправки');
      }

      setStatus('Дякуємо! Ми звʼяжемось з вами найближчим часом.');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Помилка відправки форми:', error);
      setStatus('Не вдалося надіслати. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>Зв&apos;яжіться з нами</h2>
      <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>Viber, Telegram, або телефон</p>

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