import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </div>
  );
}

export default App;