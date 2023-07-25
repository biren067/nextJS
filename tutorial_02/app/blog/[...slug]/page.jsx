"use client"
import { useRouter } from 'next/navigation'

function Post({ params }) {
    const router = useRouter()
    return (
        <div>{params.slug}</div>

    )
}

export default Post