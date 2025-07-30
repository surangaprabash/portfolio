import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./(components)/(NavBar)/NavBar";
import BtnDownload from "./(components)/(BtnDownload)/BtnDownload";
import BtnSocial from "./(components)/(BtnSocial)/BtnSocial";

import profile from "../../public/profile.png";

export default function Home() {
  return (
    <div className={styles.container}>

        <NavBar/>

        <div className={styles.main_body}>
          <div className={styles.image_content}>
            <Image
              src={profile}
              alt="Profile Image"
              width={350}
              height={350}
              className={styles.profile_image}
            />
          </div>

          <div className={styles.body_content}>
            <h2><span>Hi,</span> I'm Suranga Prabash</h2>
            <h3>Software Developer</h3>
            <p>
              I craft modern, dynamic web applications that solve real-world problems.
              As a passionate software developer, I blend clean code with thoughtful design to
              build impactful digital solutions.
            </p>
            <BtnDownload />
            <BtnSocial />
          </div>
        </div>
    </div>
  );
}
