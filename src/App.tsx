import React, { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-500 ease-in-out`}>
          {activeSection === 'home' && <Home />}
          {activeSection === 'about' && <About />}
          {activeSection === 'portfolio' && <Portfolio />}
          {activeSection === 'blog' && <Blog />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </div>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;