// import react from 'react'
// import styles from './Hero.module.css'
// import { getImageUrl } from '../../utils'



// function Hero(){
 
//     return <section className={styles.container}>
//         <div className={styles.content}>
//             <h1 className={styles.title}>Hi, I'm Ajay</h1>
//             <p className={styles.description}>I'm Full-stack devloper of Experience of React Nodejs Mongodb. Reach out if you'd like to learn More! </p>
//             <a className={styles.contactBtn} href="mailto:ajaybhaimuniya@gmail.com">Contact me</a>
//         </div>
        
//         <img className={styles.heroImg} loading='lazy' src={getImageUrl("AjayAiImage/2.jpg")} alt="Hero Image" />
//         <div className={styles.topBlur}/>
//         <div className={styles.bottomBlur}></div>
//     </section>
// }

// export default Hero;

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

function Hero() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the image index with a random number between 1 and 9
      setImageIndex(Math.floor(Math.random() * 9) + 1);
    }, 1000); // 20 seconds in milliseconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ajay</h1>
        <p className={styles.description}>
          I'm a Full-stack developer with experience in React, Node.js, and MongoDB.
          Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:ajaybhaimuniya@gmail.com">
          Contact me
        </a>
      </div>

      <img
        className={styles.heroImg}
        loading='lazy'
        src={getImageUrl(`AjayAiImage/9.jpg`)}  // Dynamically changing image source
        alt="Hero Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
