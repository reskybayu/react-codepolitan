import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePage(){
    const params = useParams();
    const [post, setPosts] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(response => {
            console.log("RESPONSE", response);
            setPosts(response)
        })
    },[])
    return (
        <>
            <div>Halaman Single</div>
            { post?.title }
        </>
    )

}
export default SinglePage;
