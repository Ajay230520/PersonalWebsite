import {React} from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects';
import {getImageUrl} from '../../utils';
function Projects(){

    return(
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                            <div className={styles.projects}>
                            {
                            projects.map((project,id)=>{
                                return(

                                    <div className={styles.project} key={id}>
                                        <img loading='lazy' src={getImageUrl(project.imageSrc)} alt={project.description} />
                                        <h2 className={styles.title}>{project.title}</h2>
                                        <p>{project.description}</p>
                                         <ul className={styles.skills}>
                                             {project.skills.map((skill,id)=>{
                                               return( <li key={id} className={styles.skill}>{skill
                                               }</li>);
                                             })}
                                         </ul>
                                         <div className={styles.btns}>
                                            <a href={project.demo}><button className={styles.btn}>Demo</button></a>
                                            <a href={project.source}><button className={styles.btn}>source</button></a>
                                         </div>
                                        </div>
                                );
                            })
                            }
                            </div>
            </div>

        </section>
    );

}

export default Projects;