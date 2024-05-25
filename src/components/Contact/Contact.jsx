// import React from 'react';
// import styles from './Contact.module.css';
// import contact from '../../data/contact.json'
// import { getImageUrl } from '../../utils';

// const attribute = ? :
// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <div className={styles.content}>
//          <div className={styles.contact}> <h1 className={styles.title}>Contact</h1>
//          <p>Feel Free to reach out!</p></div>
//          <div className={styles.links}>{
//             contact.map((item,id)=>{
//                 return(
//                     <li className={styles.link} key={id}><a  target="_blank" href={item.social}><img src={getImageUrl(item.imageSrc)} alt="" /> {item.name}</a></li>
//                 );
//             })
//          }
//          </div>
         
         
//          </div>
//     </section>
//   );
// }

// export default Contact;

import React from 'react';
import styles from './Contact.module.css';
import contact from '../../data/contact.json';
import { getImageUrl } from '../../utils';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h1 className={styles.title}>Contact</h1>
          <p>Feel Free to reach out!</p>
        </div>
        <div className={styles.links}>
          {contact.map((item, id) => {
            return (
              <li className={styles.link} key={id}>
                <a href={item.name.includes('@') ? `mailto:${item.name}` : item.social} target="_blank">
                  <img loading='lazy' src={getImageUrl(item.imageSrc)}  alt="" /> {item.name}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;

