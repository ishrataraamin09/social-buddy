import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CommentsDetail from '../CommentsDetail/CommentsDetail';

const PostDetail = () => {
    const {postId} = useParams() ;
    
    const [post, setPost] = useState({}) ;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const[comments, setComments] = useState([]) ;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        .then(res => res.json())
        .then (data => setComments(data)) ;
    }, [])

    return (
        <div style={{marginLeft:'30px'}}>
            <h1 style={{color:'purple'}}>Post Detail for ID: {postId}</h1>
            <h2>Title: "{post.title}"</h2>
            <p><strong>Post:</strong> {post.body}</p>
            <h2 style={{color:'coral'}}>Comments Section:</h2>
            <hr style={{height:'30px'},{backgroundColor:'black'}}></hr>
            {
                comments.map(cmnt => <CommentsDetail comment={cmnt}></CommentsDetail>)
            }
        </div>
    );
};

export default PostDetail;