import React, { useState } from "react";
import './styles/createPost.css'

const CreatePost = ({ addPost }) => {
    const [postContent, setPostContent] = useState('')

    const handlePostSubmit = async () => {
        if (postContent.trim() === '') {
            return; // don't submit empty posts
        }

        const newPost = {
            content: postContent,
            timestamp: new Date().toLocaleString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                hour: 'numeric',
                minute: 'numeric'
            }),
        }

        // // Send the new post data to your backend for saving to the JSON file
        // // You can use fetch or a similar method to send the data to your server

        // Call the addPost function to add the new post
        addPost(newPost)

        // After successfully saving, clear the input field
        setPostContent('') 
    }

    return (
        <div className="create-post-container">
            <h2 className="create-post-title">
                Create a Post
            </h2>
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your post here..."
                className="create-post-textarea"
            />
            <button onClick={handlePostSubmit} className="create-post-button">Post</button>
        </div>
    )
}

export default CreatePost;


