import Category from "@/components/Category";
import Post from "@/components/Post";
import { postData } from "@/data";

export default function Home() {
  return (
     <>
      <div>
        <Category />
        {postData && postData.length > 0 ? (postData.map(p => <Post key = {p.id} id = {p.id} title = {p.title} 
        content = {p.content} author = {p.author} datePublished = {p.datePublished} category = {p.category} links = {p.links} thumbnail = {p.thumbnail} authorEmail = {'test@gmail.com'}/>)):
        (<div className = "py-4">No Posts to display</div>)}
      </div>
     </>
  );
}
