
'use client'

import { categories } from "@/data"
import Link from "next/link"
import { useState } from "react"

export default function CreatePostForm()
{
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [links, setLinks] = useState<string[]>([])
    const [linkinput, setLinkinput] = useState("")
    const [category, setCategory] = useState("")

    const addLink = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if(linkinput.trim() !== "")
        {
            setLinks((prev) => [...prev,linkinput])
            setLinkinput("")
        }
    }

    const deleteLink = (id : number) => {
        
        setLinks((prev) => prev.filter((_,i) => i!==id))
        setLinkinput("")

    }

    return (
       <div>
          <h2>Create Post</h2>

          <form className = "flex flex-col gap-3 mt-4">

             <input  type = "text" placeholder = "Enter ur title" className  = "px-4 py-2" onChange={(e) => setTitle(e.target.value)}/>

             <textarea placeholder = "content" className = "px-4 py-2 h-96" onChange = {(e) => setDesc(e.target.value)}/>

             {links && links.map((link,i) => <div><Link key = {i} href = {link}>{link}</Link> <span className = "ml-2 underline cursor-pointer" onClick = {() => deleteLink(i)}>Delete Link</span></div>)}

             <div className = "flex gap-2">
                <input type = "text" placeholder = "Paste your link" onChange = {e => setLinkinput(e.target.value)} value={linkinput}/>
                <button className = "bg-slate-800 text-white font-bold rounded-md ml-2 px-2 py-1" onClick = {addLink}>Add</button>
             </div>

             <select className = "p-3 appearance-none">
                <option value = "" >Select a Category</option>
                {categories && categories.map(p => (<option key = {p.id} value = {p.title}>{p.title}</option>))}
             </select>

             <button className = "bg-slate-800 text-white font-bold rounded-md  px-4 py-2">Create Post</button>

          </form>

       </div>
    )
}

{/*
    Title
    Desc
    Links
    Image
    Select Category
*/}