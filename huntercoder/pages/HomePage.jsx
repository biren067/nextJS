'useState'
import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'


function HomePage() {
    const [blogList, getBlogList] = useState(null);

    // const list_of_post = async () => {

    //     try {
    //         const res = await fetch('http://localhost:8000/api/blog/');
    //         const BlogList = await res.json();
    //         getBlogList(BlogList)
    //         console.log(BlogList)

    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
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
            {/* {blogList.map(item => (
                <li key={item.title}>{item.content}</li>
            ))} */}
            {JSON.stringify(blogList)}
        </Fragment>

    )
}

export default HomePage