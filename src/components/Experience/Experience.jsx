import React from 'react';
import skills from '../../data/skills.json';
import historys from '../../data/history.json';
import { getImageUrl } from '../../utils';

import styles from './Experience.module.css';

function Experience(){

    return(
        <section className={styles.container} id="experience" >
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills} >{
                    skills.map((skill,id) => {
                        return <div key={id}>
                            <img src={getImageUrl(skill.imageSrc)} alt="Skill.Title" />
                            <p>{skill.title}</p>
                        </div>
                     
                    })
                    
                    }
                </div>
           

                <ul className={styles.history}>{
                    
                    historys.map((historyItem,id)=>{
                        return(
                           <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} 
                            alt={`${historyItem.organisation} Logo`}/>
                            <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role} ${historyItem.organisation}    `}</h3>
                                    <p>{`${historyItem.startDate} ${historyItem.endDate} `}</p>
                                    <>{historyItem.experiences.map((experience,id)=>{
                                        return(<li key={id}>{experience}</li>)
                                    })}</>
                            </div>

                            </li>
                        )
                    }
                    )
                    }
                </ul>
                </div>

        </section>

    );

}

export default Experience;