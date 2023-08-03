import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog(){
    const [post, setPosts] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(response => setPosts(response))
    }, [])

    return (
        <>
            <h2>My Blog Posts</h2>
            {
                post.map((item, index) => (
                    <div key={index}>
                        <Link to={`/blog/${item.id}`}>- {item.title}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default Blog;