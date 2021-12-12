import React from 'react'
import styles from '../css/styles.module.css'
export default function Footer(){
    console.log(styles)
        return(
            <div className={styles['footer-div']}>
                <img src='/media/logo.png'/>
            </div>
        )
}