'useState'
import React, { Fragment, useState, useEffect } from 'react'
// import Head from 'next/head'
// import Script from 'next/script'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

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
            <ul>
                {blogList && blogList.map(item => (
                    <li className={styles.blog_group} key={item.title}>
                        <div className={styles.blog_title}>
                            <Link href={`blogpost/${item.title}`}>{item.title}</Link>
                        </div>
                        <div className={styles.blog_content}>{item.content}</div>
                        <div className={styles.blog_date}>publised on: {item.post_date}</div>
                    </li>
                ))}
            </ul>
            {/* {JSON.stringify(blogList)} */}
        </Fragment>

    )
}

export default HomePage