'use client';
import React from 'react';
import styles from './page.module.css';
import BtnBack from '../(components)/(BtnBack)/BtnBack';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = e.target.subject.value;
    const body = e.target.body.value;

    // Change to your actual email
    const email = 'srngprabash@gmail.com';

    // Compose mailto URL
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoURL;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.headerContainer}`}>
        <BtnBack />
        <h2 className={styles.page_title}>Contact ME</h2>
      </div>

      <div className={styles.contact_content}>
        <div className={styles.contactLeft}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📧</div>
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>srngprabash@gmail.com</p>
          </div>
        </div>

        <div className={styles.contactRight}>
          <h2 className={styles.sub_title}>Send a Message</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input name="subject" type="text" placeholder="Subject" className={styles.input} required />
            <textarea name="body" placeholder="Message" className={styles.textarea} rows="6" required />
            <button type="submit" className={styles.button}>Send via Email</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;