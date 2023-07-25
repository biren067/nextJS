import React from 'react'
import styles from '../styles/about.module.css'

function About() {

    return (
        <>
            <style jsx>
                {`
             .text_color{
                 color:red;
             }
            `}
            </style>
            <div className={`${styles.bg_cyan_color} text_color`}> About page</div>
            <div className="text_color"> About page</div>
        </>
    )
}

export default About