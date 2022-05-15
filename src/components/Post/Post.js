import React from 'react';
import { useParams } from 'react-router-dom';
const Post = () => {
    const params = useParams();
    return (
        <div>
            <h1>This is post</h1>
            <p>Post id is {params.postId} </p>
        </div>
    );
};

export default Post;