import React, { Fragment } from 'react'
// import '../styles/header.css'
function Header() {
    return (
        <Fragment>
            <nav className='mainnav'>
                <ul className='list-group'>
                    <li className='list-items'>Home</li>
                    <li className='list-items'>Blog</li>
                    <li className='list-items'>Contact</li>
                    <li className='list-items'>About</li>
                </ul>
            </nav>
        </Fragment>

    )
}

export default Header