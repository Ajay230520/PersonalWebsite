import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

function About(){

   return  <section class={styles.container} id="about">
    <h2 className={styles.title}> About</h2>
    <div className={styles.content}>
        <img className={styles.aboutImage}  src={getImageUrl("about/aboutImage.png")} alt="Me sitting with laptop" />
        <ul className={styles.aboutItems} >
            <li className={styles.aboutItem} >
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>FrontEnd Devloper</h3>
                    <p>I'm a frontend developer with eperience in building responsive websites and optimize sites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>i have expericence developing fast and optimised and APIs.</p>
                </div>
            </li>
        
        <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have systems as well.</p>
                </div>
            </li>
            </ul>
    </div>
   </section>
}

export default About;