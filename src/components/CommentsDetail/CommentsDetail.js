import React from 'react';

const CommentsDetail = (props) => {
    const {name, email, body} = props.comment
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>e-mail: {email}</p>
            <p><small>body: {body}</small>
            </p>
            <hr></hr>
        </div>
    );
};

export default CommentsDetail;