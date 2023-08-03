import { Link, useLoaderData } from 'react-router-dom';

function Blog(){
    const post = useLoaderData();

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