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
            })},[]);
     
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs}  title="all" handleDelete={handleDelete}></BlogList> */}

            {/* <BlogList style={{
                color:"green"
            }}
             blogs={blogs.filter((blog) => blog.autor=== "mario")} title ="title1"></BlogList> */}


        </div>
    );
}
export default Home;