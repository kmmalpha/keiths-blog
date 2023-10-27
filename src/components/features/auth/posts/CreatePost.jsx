import React, { useState } from "react";

const CreatePost = () => {
    const [postContent, setPostContent] = useState('')

    const handlePostSubmit = async () => {
        if (postContent.trim() === '') {
            return;
        }

        const newPost = {
            content: postContent,
            timestamp: new Date().toLocaleDateString(),
        }

        // Send the new post data to your backend for saving to the JSON file
        // You can use fetch or a similar method to send the data to your server

        // After successfully saving, clear the input field
        setPostContent('') 
    }

    return (
        <div className="create-post-container">
            <h2>
                Create a Post
            </h2>
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your post here..."
            />
            <button onClick={handlePostSubmit}>Post</button>
        </div>
    )
}

export default CreatePost;


