import { postData } from "@/data"
import Post from "@/components/Post"
import Link from "next/link"

export default function Dashboard()
{
    return (
        <div>
            <h1 className = "text-3xl font-bold tracking-tighter text-center">My Posts</h1>
            {postData && postData.length > 0 ? (postData.map(p => <Post key = {p.id} id = {p.id} title = {p.title} 
            content = {p.content} author = {p.author} datePublished = {p.datePublished} category = {p.category} links = {p.links} thumbnail = {p.thumbnail} authorEmail = {'test@gmail.com'}/>)):
            (<div>No Posts created yet. <Link href = {`/create-post`} className = "underline">Create New</Link></div>
            )}

        </div>
    )
}