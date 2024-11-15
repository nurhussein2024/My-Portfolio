import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Blog = () => {
  const posts = [
    {
      title: 'Modern Web Development Practices',
      excerpt: 'Exploring the latest trends and best practices in web development...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'How artificial intelligence is shaping the future of web development...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Optimizing Web Performance',
      excerpt: 'Tips and techniques for improving website performance and user experience...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Blog Posts</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-gray-800 rounded-xl overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-400">{post.date}</time>
              <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};