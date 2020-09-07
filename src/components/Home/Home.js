import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

    const [posts, setPosts] = useState([]) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {
                posts.map(pst => <Posts post={pst}></Posts>)
            }
        </div>
    );
};

export default Home;