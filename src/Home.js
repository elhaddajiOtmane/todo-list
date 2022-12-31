import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

   
        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs); 
        };
        useEffect(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data)
                setIsPending(false);
            })},[]);
     
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}

            {isPending && <div>Loading...</div>}


        </div>
    );
}
export default Home;