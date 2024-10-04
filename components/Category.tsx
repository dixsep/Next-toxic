
import {categories} from '../data'
import Link from 'next/link'

export default function Category(){
    return(
        <div className = "flex gap-2 text-sm">
           {categories.map(cat => <Link className = "px-4 py-1 rounded-md bg-slate-800 text-white" key = {cat.id} href = {`/categories/${cat.title}`}>{cat.title}</Link>)}
        </div>
    )
}