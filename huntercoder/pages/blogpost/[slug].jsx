import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'
function Post() {
    const [blog, getBlog] = useState(null)
    const router = useRouter()
    const { slug } = router.query
    const getPost = async (title) => {

        try {
            console.log("{title}::", title)
            const res = await fetch(`http://localhost:8000/api/blog/${title}`);
            const blog = await res.json();
            getBlog(blog)
            console.log(blog)

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getPost(slug)
    }, [slug])


    return (
        <>
            {/* {JSON.stringify(blog)} */}
            <li className={styles.blog_group} key={blog && blog.title}>
                <div className={styles.blog_title}>{blog && blog.title}</div>
                <div className={styles.blog_content}>{blog && blog.content}</div>
                <div className={styles.blog_date}>publised on: {blog && blog.post_date}</div>
            </li>
        </>

    )
}

export default Post