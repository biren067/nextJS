import React, { Fragment } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'


function HomePage() {
    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>

    )
}

export default HomePage