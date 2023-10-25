import React, { useState } from 'react';
import './styles/blog.css';
import Post from '../components/Post';

const Blog = () => {
	// Sample post data
	const [posts, setPosts] = useState([
		{
			username: 'kmmalpha',
			message: 'Its not really much right now but its something',
			timestamp: 'Tue, 24 Oct, 12:48',
		},
		{
			username: 'Alpha',
			message: 'Yeah, gotta start somewhere, right?',
			timestamp: 'Tue, 24 Oct, 12:48',
		},
		{
			username: 'Serenity',
			message: 'You gotta!',
			timestamp: 'Tue, 24 Oct, 12:49',
		},
		{
			username: 'Lao Tzu',
			message: 'The journey of a thousand miles begins with a single step.',
			timestamp: 'Tue, 24 Oct, 12:57',
		},
		{
			username: 'Norman Vincent Peale',
			message: 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
			timestamp: 'Tue, 24 Oct, 13:00',
		},
		{
			username: 'John D. Rockefeller. create a state that will save 4 posts with different usernames and content and then map them',
			message: 'Dont be afraid to give up the good to go for the great.',
			timestamp: 'Tue, 24 Oct, 13:09',
		},
		{
			username: 'Steve Jobs',
			message: 'The only way to do great work is to love what you do.',
			timestamp: 'Tue, 24 Oct, 13:10',
		},
		{
			username: 'Jimmy Johnson',
			message: 'The difference between ordinary and extraordinary is that little extra.',
			timestamp: 'Tue, 24 Oct, 13:25',
		},
		{
			username: 'Confucius',
			message: 'It does not matter how slowly you go as long as you do not stop.',
			timestamp: 'Tue, 24 Oct, 13:49',
		}
	]);

	return (
		<div className='container'>
            {posts.map((post, index) => (
				<Post
					key={index}
					username={post.username}
					message={post.message}
					timestamp={post.timestamp}
				/>
			))}
        </div>
	)
}

export default Blog;