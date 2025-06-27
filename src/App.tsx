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
      about: 'About - Jay Jahanzad | ML Engineer',
      experience: 'Experience - Jay Jahanzad | ML Engineer',
      media: 'Projects - Jay Jahanzad | ML Engineer',
      contact: 'Contact - Jay Jahanzad | ML Engineer'
    };

    document.title = sectionTitles[activeSection] || 'Jay Jahanzad | Senior ML Engineer';
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