'useState'
import React, { Fragment, useState, useEffect } from 'react'
// import Head from 'next/head'
// import Script from 'next/script'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import styles from '../styles/Header.module.css'

function HomePage() {
    const [blogList, getBlogList] = useState(null);


    useEffect(() => {
        const list_of_post = async () => {

            try {
                const res = await fetch('http://localhost:8000/api/blog/');
                const BlogList = await res.json();
                getBlogList(BlogList)
                console.log(BlogList)

            } catch (e) {
                console.log(e);
            }
        }
        list_of_post()
    }, []);
    return (
        <Fragment>
            {/* <ul className={styles.list_group}> */}
            {blogList.map(item => (
                <li key={item.title}>
                    <div>{item.title}</div>
                    <div>{item.content}</div>
                    <div>{item.post_date}</div>
                </li>
            ))}
            {/* </ul> */}
            {JSON.stringify(blogList)}
        </Fragment>

    )
}

export default HomePage