import React, { useEffect, useState } from 'react';
import './styles/blog.css';
// import Post from '../components/Post';

const Blog = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		// Fetch the blog posts from the JSON file (or your backend) when the component mounts
		fetch('http://127.0.0.1:5000/api/posts') // Adjust the API endpoint
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error(error))
	}, [])
	
	return (
		<div>
			<h2>Blog Posts</h2>

			{/* Display existing posts */}
			{posts.map((post, index) => (
				<div key={index}>
					<span>{post.timestamp}</span>
					<span>{post.content}</span>
				</div>
			))}
		</div>
	)
}

export default Blog;
