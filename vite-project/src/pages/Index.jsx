import postData from '../posts.json';
import Search from '../components/Search';
import Article from '../components/Article';
import { useState, useEffect } from 'react';

function HomePage(){
    const [post, setPosts] = useState(postData);
    const [totalData, setTotalData] = useState(0);
    const [externalPost, setExternalPost] = useState([]);

    const onChangeSearch = (value) => {
        const filteredPosts = postData.filter((item) => 
             item.title.includes(value)
        )
        setPosts(filteredPosts);
        setTotalData(filteredPosts.length);
    }

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(response => setExternalPost(response))
    }, [])
    return (
        <>
            <h1>Simple Blog</h1>
            <Search fromSearchComponent={onChangeSearch} totalData={totalData} />
            {
                post.map(({title,tags,date,isNew}, index) => (
                    <Article title={title} tags={tags} date={date} isNew={isNew} key={index} />
                ))
            }
            <h2>External Post</h2>
            {
                externalPost.map((item, index) => (
                    <div key="index">- {item.title}</div>
                ))
            }
        </>
    )
}

export default HomePage;
