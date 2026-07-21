import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <section className={styles.section}>
      <h1 className={styles.pageTitle}>Політика конфіденційності</h1>
      <p className={styles.updated}>Останнє оновлення: липень 2026</p>

      <div className={styles.card}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Загальні положення</h2>
          <p className={styles.text}>
            Ka1roxx (&quot;ми&quot;, &quot;компанія&quot;) надає послуги зі створення сайтів-портфоліо
            та супутнього технічного обслуговування для малого бізнесу. Ця політика описує, як ми
            працюємо з даними клієнтів та на яких умовах надається хостинг сайту.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Які дані ми обробляємо</h2>
          <p className={styles.text}>
            Для створення сайту ми отримуємо від клієнта інформацію про його бізнес: тексти, фото,
            контактні дані, опис послуг. Ці дані використовуються виключно для наповнення сайту клієнта
            та не передаються третім особам.
          </p>
          <p className={styles.text}>
            Заявки, залишені відвідувачами сайтів клієнтів через контактну форму, передаються напряму в
            Telegram-бот, до якого має доступ лише власник відповідного сайту.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Хостинг та відповідальність</h2>
          <p className={styles.text}>
            Плани, що включають хостинг на нашій стороні, передбачають розміщення сайту клієнта на
            інфраструктурі Ka1roxx на строк, узгоджений під час оплати. Ми забезпечуємо працездатність
            сайту протягом цього строку.
          </p>
          <p className={styles.text}>
            У разі, якщо клієнт вирішує відмовитися від нашого хостингу та перенести сайт на власний
            хостинг, компанія:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              надає клієнту повний вихідний код сайту без обмежень;
            </li>
            <li className={styles.listItem}>
              надає доступ до Telegram-бота для отримання заявок з контактної форми;
            </li>
            <li className={styles.listItem}>
              припиняє розміщення сайту на власній інфраструктурі.
            </li>
          </ul>
          <p className={styles.text}>
            З моменту передачі вихідного коду та переходу на власний хостинг клієнта{' '}
            <span className={styles.highlight}>
              Ka1roxx не несе відповідальності за подальшу працездатність, доступність або безпеку сайту
            </span>
            . Уся відповідальність за подальше розміщення, обслуговування та функціонування сайту
            переходить до клієнта або обраного ним хостинг-провайдера.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Права клієнта</h2>
          <p className={styles.text}>
            Клієнт має право в будь-який момент запросити копію вихідного коду свого сайту та видалення
            своїх даних з нашої інфраструктури. Домен, придбаний клієнтом самостійно або через нас,
            залишається власністю клієнта.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Зміни до політики</h2>
          <p className={styles.text}>
            Ми можемо оновлювати цю політику. Актуальна версія завжди доступна на цій сторінці. Дата
            останнього оновлення вказана вгорі сторінки.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Контакти</h2>
          <p className={styles.text}>
            З питань щодо цієї політики звертайтесь через контактну форму на головній сторінці або
            месенджери, вказані в розділі &quot;Зв&apos;яжіться з нами&quot;.
          </p>
        </div>
      </div>
    </section>
  );
}