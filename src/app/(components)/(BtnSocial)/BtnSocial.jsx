'use client';
import React from 'react';
import styles from './BtnSocial.module.css';
import Image from 'next/image';

import linkedin1 from '../../../../public/linkedin1.png';
import linkedin2 from '../../../../public/linkedin2.png';
import github1 from '../../../../public/github1.png';
import github2 from '../../../../public/github2.png';
import email1 from '../../../../public/email1.png';
import email2 from '../../../../public/email2.png';

function BtnSocial() {
  return (
    <div className={styles.social_icons_container}>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/surangaprabash"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon_body}
      >
        <Image src={linkedin1} alt="LinkedIn" fill className={`${styles.social_icon} ${styles.default}`} />
        <Image src={linkedin2} alt="LinkedIn Hover" fill className={`${styles.social_icon} ${styles.hover}`} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/surangaprabash"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon_body}
      >
        <Image src={github1} alt="GitHub" fill className={`${styles.social_icon} ${styles.default}`} />
        <Image src={github2} alt="GitHub Hover" fill className={`${styles.social_icon} ${styles.hover}`} />
      </a>

      {/* Email */}
      <a
        href="mailto:srngprabash@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon_body}
      >
        <Image src={email1} alt="Email" fill className={`${styles.social_icon} ${styles.default}`} />
        <Image src={email2} alt="Email Hover" fill className={`${styles.social_icon} ${styles.hover}`} />
      </a>
    </div>
  );
}

export default BtnSocial;
