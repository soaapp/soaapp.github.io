import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const { activeSection, navigateToSection } = useActiveSection();

  useEffect(() => {
    // Update page title based on active section
    const sectionTitles: Record<string, string> = {
      about: 'About - Your Name | ML Engineer',
      experience: 'Experience - Your Name | ML Engineer',
      media: 'Projects - Your Name | ML Engineer',
      contact: 'Contact - Your Name | ML Engineer'
    };

    document.title = sectionTitles[activeSection] || 'Your Name | Senior ML Engineer';
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={navigateToSection} />
      
      <main>
        <About />
        <Experience />
        <Media />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;