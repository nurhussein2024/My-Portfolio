import React from 'react';
import { Download } from 'lucide-react';

// استيراد ملف الـ PDF من مجلد assets
import cvFile from '../assets/cv-nurhussein-2025.pdf';

export const Home = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-8 items-center px-4 py-16 md:px-8">
      
      {/* الصورة الجانبية */}
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

      {/* النصوص + زر تحميل السي في */}
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

        {/* زر تحميل السيرة الذاتية — نسخة احترافية */}
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-flex items-center gap-3 
            px-7 py-3 rounded-full font-medium
            bg-gradient-to-r from-blue-600 to-blue-700 
            text-white shadow-lg shadow-blue-500/30
            hover:shadow-blue-600/40 hover:scale-[1.03]
            transition-all duration-300 group
          "
        >
          <span className="text-sm md:text-base tracking-wide">
            Download CV
          </span>

          <div
            className="
              w-8 h-8 rounded-full flex items-center justify-center
              bg-white/20 group-hover:bg-white/30
              transition-all duration-300
            "
          >
            <Download
              className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
            />
          </div>

          {/* لمعة خفيفة */}
          <span
            className="
              absolute inset-0 rounded-full 
              bg-white/10 opacity-0 group-hover:opacity-20 
              transition-opacity duration-300
            "
          ></span>
        </a>

      </div>
    </div>
  );
};
