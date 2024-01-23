import react from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

function Hero(){
 
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aj</h1>
            <p className={styles.description}>I'm Full-stack devloper of Experience of React Nodejs Mongodb. Reach out if you'd like to learn More! </p>
            <a className={styles.contactBtn} href="mailto:ajaybhaimuniya@gmail.com">Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}></div>
    </section>
}

export default Hero;