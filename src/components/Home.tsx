import React from 'react';
import { Download } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-8 items-center px-4 py-16 md:px-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full animate-spin-slow blur-xl opacity-30"></div>
        <div className="relative z-10">
          <img
            src="https://i.imgur.com/9Uq4djY.png"
            alt="Profile"
            className="w-[400px] h-[400px] rounded-full object-cover mx-auto border-4 border-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-500">Nurhussein Ahmed</span>
          <br />
          A Web And System Developer
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a versatile developer specializing in systems, websites, and applications. 
          With expertise in modern tools, frameworks, and libraries such as React, Angular, 
          MUI, and Figma, I work across multiple domains. I am also skilled in Data Engineering, 
          Frontend Development, Software Engineering, and App Development.
        </p>
        
        <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all">
          <span>Download CV</span>
          <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};