import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
function post() {
    return (
        <>
            <Head>
                <title>bond</title>
            </Head>
            <Script src="/javascript.js" strategy="lazyOnload"></Script>
            <div>post</div>
        </>

    )
}

export default post