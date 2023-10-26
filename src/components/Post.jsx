import React from 'react';
import './styles/post.css';

const Post = ({ username, timestamp, message }) => {
    return (
        <div className='post-container'>
            <div className='post'>
                <span className='post-username'>{username}</span><br />
                <span className='post-timestamp'>{timestamp}</span><br />
                <span className='post-message'>{message}</span>
            </div>
        </div>
    )
}

export default Post;