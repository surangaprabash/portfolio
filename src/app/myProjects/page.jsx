import React from 'react'
import styles from "./page.module.css";
import ProjectCard from '../(components)/(ProjectCard)/ProjectCard';
import BtnBack from '../(components)/(BtnBack)/BtnBack';

const projects = [
  {
    title: 'YouHealHospital',
    description: 'A hospital management system where patients book appointments, doctors examine with records, and admins manage users, doctors, and appointments.',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/surangaprabash/channelingAppLaravel',  
    liveLink: '',  
  },
  {
    title: 'Online Cake Ordering System',
    description: 'A web app for browsing cakes, placing offline orders, and admin-side control for users, orders, and blog content.',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/surangaprabash/Laravel_Cake_ordering_system',
    liveLink: '',
  },
  {
    title: 'English Learn App (Android)',
    description: 'An Android app using Firebase where students learn, take quizzes, and teachers upload notes, marks, and manage profiles.',
    tags: ['Firebase Firestore', 'Realtime DB', 'Android Studio', 'Java', 'XML'],
    githubLink: 'https://github.com/surangaprabash/EnglishLearnApp',
    liveLink: '',
  },
  {
    title: 'COVID Tracker App (Android)',
    description: 'An Android app for real-time COVID tracking with 30m proximity alert and live case updates.',
    tags: ['Android Studio', 'Location Services', 'Bluetooth', 'Java'],
    githubLink: '',
    liveLink: '',
  },
  {
    title: 'Android Ball Catch Game',
    description: 'A simple mobile game where users catch falling balls with a paddle and earn points.',
    tags: ['Android Studio', 'Java', 'XML'],
    githubLink: '',
    liveLink: '',
  },
];


function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <BtnBack className={styles.backButton} />
            <h1 className={styles.title}>Projects</h1>
          </div>
        </header>

        <main className={styles.projectsContainer}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Page;