import React, { useState } from "react";

const CreatePost = ({ onPostSubmit }) => {
    const [postContent, setPostContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();

        if (postContent.trim() === '') {
            setErrorMessage('Please enter a post before submitting')
            return;
        }
    }

    // Call the callback function to submit the post
    onPostSubmit(postContent)

    // Clear the input field
    setPostContent('')
    setErrorMessage('')

    return (
        <div className="create-post-container">
            <h2 className="create-post-title">Create a Post</h2>
            <form onSubmit={handlePostSubmit} className="create-post-form">
                <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Write your post here..."
                    className="create-post-textarea"
                />
                <button type="submit" className="create-post-button">Post</button>
            </form>
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    )
}

export default CreatePost;