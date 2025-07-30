'use client';
import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import background from "../../../public/back_img.png";
import BtnBack from '../(components)/(BtnBack)/BtnBack';

function page() {
  return (
    <div className={styles.container}>
      <Image
        src={background}
        alt="background"
        className={styles.background_img}
        priority
      />

      <div className={`${styles.headerContainer}`}>
        <BtnBack />
        <h2 className={`${styles.page_title} ${styles.fly_in} `}>About ME</h2>
      </div>

      <div className={styles.about_text}>
        <p>
          I'm Suranga Prabash, a passionate software developer who enjoys crafting modern,
          intuitive solutions for real-world problems. I have a strong interest in both web and
          mobile application development, and I'm constantly exploring ways to merge
          functionality with user-friendly design.
        </p>

        <p>
          I'm also fascinated by innovative technologies and smart systems, which inspires me to
          work on creative project from connected devices to interactive digital platforms.
          I always aim to blend logic with creativity in everything I build.
        </p>

        <p>
          My dream is to become a skilled software engineer, and I'm building that path one line
          of code at a time.
        </p>
      </div>
    </div>
  );
}

export default page;
