import propTypes from "prop-types";
import { func } from "prop-types";
import React from "react";
import styles from '../css/styles.module.css'

export default function Card(props){
    return(
        <div className={styles['div-card']}>
                <div className={styles['title']}>
                    {props.title}
                </div>
                <div className={styles['text-content']}>
                    {props.text}
                </div>
        </div>
    )
}