import React, { Fragment } from 'react'
import Link from 'next/Link'
// import '../styles/header.css'
function Header() {
    return (
        <Fragment>
            <nav className='mainnav'>
                <ul className='list-group'>
                    <Link href="/"><li className='list-items'>Home</li></Link>
                    <Link href="/blog"><li className='list-items'>Blog</li></Link>
                    <Link href="/contact"><li className='list-items'>Contact</li></Link>
                    <Link href="/about"><li className='list-items'>About</li></Link>
                </ul>
            </nav>
        </Fragment>

    )
}

export default Header