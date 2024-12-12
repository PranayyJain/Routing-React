import React from 'react';
import './blogs.css'; // Import the CSS file

function Blogs() {
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Technology',
            imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            excerpt: 'Explore how AI, IoT, and 5G are shaping the next generation of technology.',
        },
        {
            id: 2,
            title: 'Top Programming Languages in 2024',
            imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            excerpt: 'Dive into the most popular programming languages and their use cases.',
        },
        {
            id: 3,
            title: 'Web Development Trends',
            imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            excerpt: 'Discover the latest frameworks, tools, and techniques in web development.',
        },
    ];

    return (
        <div className="blog-container">
            <h2>Blogs</h2>
            <div className="blog-posts">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <img src={post.imageUrl} alt={post.title} className="blog-image" />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <button className="read-more">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
