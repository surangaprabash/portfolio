'use client';
import React from 'react';
import styles from './BtnDownload.module.css';

export default function BtnDownload() {
  const fileId = '12V7WZ5gi60TGDAKGnMJn7fMyU4Rpifvp';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <a
      href={downloadUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={styles.cv_button}>Download CV</button>
    </a>
  );
}
