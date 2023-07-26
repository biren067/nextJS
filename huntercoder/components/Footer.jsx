import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={`${styles.footer_primary} text-center`}>
                    <Link href="/">Back To top</Link>
                </div>
                <div className={styles.footer_secondary}>
                    <div className='py-10 mx-5'>
                        All rights reserved © 2023
                    </div>
                </div>
            </div>

        </>

    )
}

export default Footer