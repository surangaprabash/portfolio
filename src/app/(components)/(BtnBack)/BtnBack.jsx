'use client';
import React from 'react'
import styles from "./BtnBack.module.css";
import Image from 'next/image';
import back from "../../../../public/back.png";
import Link from 'next/link';

function BtnBack() {
  return (
    <Link href="/">
      <button className={styles.back_button}>
        <Image src={back} alt="Back" className={styles.back_icon} />
        <span className={styles.btntext}>Back Home</span>
    </button>
    </Link>
  )
}

export default BtnBack
