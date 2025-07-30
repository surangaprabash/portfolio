'use client'
import React from 'react'
import styles from "./NavBar.module.css";
import NavBtn from './(NavBtn)/NavBtn';

const navBtns = [
  {
    title: 'My Projects',
    routeLink: '/myProjects',
  },
  {
    title: 'Contact',
    routeLink: '/contactMe',
  },
  {
    title: 'About Me',
    routeLink: '/aboutMe',
  },
]

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.nav_left}>
        <span>S</span>uranga Prabash
      </div>
      <div className={styles.nav_right}>
        {navBtns.map((navBtn, idx) => (
            <NavBtn key={idx} {...navBtn} />
        ))}
      </div>
    </div>
  )
}

export default NavBar
