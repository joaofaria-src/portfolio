import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={LandingSection} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/contact" component={ContactMeSection} />
        {/* Add other routes as needed */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
