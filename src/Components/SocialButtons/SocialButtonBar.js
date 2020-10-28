import React from 'react'
import styles from './SocialButtons.module.css'

const SocialBar = ()=>{

    return(
        <div className={styles.continer}>
            <i className={"fas fa-share-alt"}></i>
            <i className={"fas fa-comment"}></i>
        </div>
    )
}
export default SocialBar