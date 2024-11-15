import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-featured online shopping platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=60',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Calculator App',
      description: 'Advanced calculator with scientific functions and history tracking',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=60',
      tags: ['JavaScript', 'HTML/CSS']
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-blue-400">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-blue-400">
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};