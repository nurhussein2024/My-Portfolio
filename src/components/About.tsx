import React from 'react';
import { Code2, Palette, Database, Terminal } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Expert in React, Angular, and modern UI libraries'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Python, and database systems'
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'System Development',
      description: 'Experience with system architecture and DevOps'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Skilled in creating beautiful, user-friendly interfaces'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-300 leading-relaxed">
          I have extensive experience in programming, particularly with frameworks 
          like React and Angular. I utilize modern libraries, including AI libraries 
          like Material-UI and others. Additionally, I'm skilled in high-level design 
          and employ modern methods to create user-friendly interfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
            <div className="text-blue-500 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};