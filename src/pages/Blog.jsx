import React, { useEffect, useState } from 'react';
import './styles/blog.css';
import CreatePost from '../components/features/auth/posts/CreatePost';
// import Post from '../components/Post';

const Blog = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		// Fetch the blog posts from the JSON file (or your backend) when the component mounts
		fetch('http://127.0.0.1:5000/api/posts') // The API endpoint
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error(error))
	}, [])

	const addPost = (newPost) => {
		// Add new post to the state
		setPosts([...posts, newPost])

		// Save the updated posts to your 'posts.json' file or backend
		fetch('http://127.0.0.1:5000/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify([newPost, ...posts])
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error))

	}
	
	return (
		<div className='blog-container'>
			<h3 className='blog-title'>Blog Posts</h3>
			<CreatePost addPost={addPost} />
			{/* Display existing posts */}
			{posts.reverse().map((post, index) => (
				<div key={index} className='blog-post'>
					<span className='blog-post-username'>{post.username}</span><br />
					<span className='blog-post-timestamp'>{post.timestamp}</span><br />
					<span className='blog-post-content'>{post.content}</span>
				</div>
			))}
		</div>
	)
}

export default Blog;
