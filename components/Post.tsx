
import Image from "next/image"
import Link from "next/link"
import DeleteButton from "./DeleteButton";

export interface postProps{
    id : string,
    title : string,
    content : string,
    author : string,
    datePublished : string,
    category ?: string,
    links ?: string[],
    thumbnail ?: string,
    authorEmail ?: string
}
export default function Post({ id, title, content, author, datePublished, category, links, thumbnail, authorEmail} : postProps){

    const isEditable = true;

    return(
        <div className = "my-4 border-b border-b-300">
            <div className = "mb-4">
                Posted By: <span className = "font-bold">{author}</span> on {datePublished}
            </div>

            <div className = "h-72 relative">
                {thumbnail && <Image src = {thumbnail} alt = "Image" fill className = "rounded object-center"/>}
            </div>

            {category && <Link href  = {`categories/${category}`} className  = "bg-slate-800 w-fit text-white px-4 py-0.5 rounded-md text-sm font-bold mt-4 block">{category}</Link>}

            <h2 className = "my-4">{title}</h2>
            <p className = "leading-loose">{content}</p>

            {links && (
                <div className = "my-4 flex flex-col gap-3">
                   {links.map((link, i) => (
                    <div>
                        <Link href = {link} className = "font-semibold text-dark max-w-full overflow-hidden text-ellipsis">{link}</Link>
                    </div>
                   ))}
                </div>
            )}

            {isEditable && (
                <div className = "flex gap-3 font-bold py-2 px-4 rounded-md bg-dark-400 w-fit my-2 cursor-pointer">
                    <Link href = {`/edit-post/${id}`}>Edit</Link>
                    <DeleteButton />
                </div>
            )}
        </div>
    )
}

{/*
    Posted by : Vishal on date
    image
    category
    title
    description
    links
    <div className = "flex flex-col gap-4">
            <h1>Posted By: <span>{author}</span> on {datePublished}</h1>
            <Image
             src = {thumbnail ? thumbnail : "No Image"}
             width = {600}
             height = {200}
             alt = "Image"
            />
            <Link className = "px-4 py-1 rounded-md bg-slate-800 text-white"  href = {`/categories/${category}`}>{category}</Link>
            <h1 className = "text-2xl font-bold">{title}</h1>
            <p className = "text-sm">{content}</p>
            {links && links.map(link => <Link href = {link}>Link</Link>)}
        </div>

    preferred not to delete or edit the post once posted
*/}