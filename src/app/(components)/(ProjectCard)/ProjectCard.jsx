'use client';
import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, tags, githubLink, liveLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
