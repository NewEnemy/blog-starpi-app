import React from 'react';
import styles from './Posts.module.css'

export default function Orderbox(props){

    return(
       <div className={styles.OrderboxWraper}>
          
           <div className={styles.Orderbox} onClick={props.function}>
               <i className={"fas fa-chevron-right "+styles.OrderboxArrow}></i>
           <h3 >{props.selected?"Remove":"Get One"}</h3>
           </div>
          
       </div>
    )
}