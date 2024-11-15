import React from 'react';
import { Home, User, Briefcase, Newspaper, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: 'home', Icon: Home },
    { id: 'about', Icon: User },
    { id: 'portfolio', Icon: Briefcase },
    { id: 'blog', Icon: Newspaper },
    { id: 'contact', Icon: Mail },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {navItems.map(({ id, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
              ${activeSection === id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};