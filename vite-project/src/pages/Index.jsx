import postData from '../posts.json';
import Search from '../components/Search';
import Article from '../components/Article';
import { useState, useEffect } from 'react';

function HomePage(){
    const [post, setPosts] = useState(postData);
    const [totalData, setTotalData] = useState(0);

    const onChangeSearch = (value) => {
        const filteredPosts = postData.filter((item) => 
             item.title.includes(value)
        )
        setPosts(filteredPosts);
        setTotalData(filteredPosts.length);
    }


    return (
        <>
            <h1>Simple Blog</h1>
            <Search fromSearchComponent={onChangeSearch} totalData={totalData} />
            {
                post.map(({title,tags,date,isNew}, index) => (
                    <Article title={title} tags={tags} date={date} isNew={isNew} key={index} />
                ))
            }
            
        </>
    )
}

export default HomePage;
