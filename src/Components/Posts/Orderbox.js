import React from 'react';
import styles from './Posts.module.css'

export default function Orderbox(props){

    return(
       <div className={styles.OrderboxWraper}>
          
           <div className={styles.Orderbox} >
               <i className={"fas fa-chevron-right "+styles.OrderboxArrow}></i>
           <a href="#" onClick={props.function}>Get one</a>
           </div>
          
       </div>
    )
}