const BlogList = (props) => {
    const blogs=props.blogs
    const title=props.title
    const handleDelete=props.handleDelete
    
    return (
        <div className="blog-list">
             { blogs.map((blog) => (
                <div className="blog-previw" key={blog.id}>
                    <h3>
                        {
                            blog.title
                        }
                    </h3>
                    <p>
                        written by {
                            blog.autor
                        }
                    </p>
                    <button onClick={()=>handleDelete(blog.id)}> delete blog</button>
                </div>
            ))
}
        </div>
    );
}

export default BlogList;
