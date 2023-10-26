import React, { useState } from 'react';
import './styles/blog.css';
// import Post from '../components/Post';
import CreatePost from '../components/features/auth/posts/CreatePost';

const Blog = () => {
	// eslint-disable-next-line
	const [posts, setPosts] = useState([])

	const handlePostSubmit = (content) => {
		// Create a new post object and add it to the posts array
		const newPost = {
			id: new Date().getTime(), // Consider using a more unique ID generator
			content,
			timestamp: new Date().toLocaleDateString(),
		}
		setPosts([...posts, newPost])
	}

	return (
		<div className='blog-container'>
			<h1>Blog Posts</h1>

			<CreatePost onPostSubmit={handlePostSubmit} />

			{/* Display existing posts */}
			{posts.map((post) => (
				<div key={post.id}>
					<span>{post.timestamp}</span>
					<span>{post.content}</span>
				</div>
			))}
		</div>
	)
}

export default Blog;