import React, { Fragment } from 'react'
// import Link from 'next/Link'
import styles from '../styles/Header.module.css'
function Header() {
    return (
        <Fragment>
            <nav className={styles.mainnav}>
                {/* <ul className={styles.list_group}>
                    <Link href="/"><li className={styles.list_item}>Home</li></Link>
                    <Link href="/blog"><li className={styles.list_item}>Blog</li></Link>
                    <Link href="/contact"><li className={styles.list_item}>Contact</li></Link>
                    <Link href="/about"><li className={styles.list_item}>About</li></Link>
                </ul> */}
            </nav>
        </Fragment>

    )
}

export default Header