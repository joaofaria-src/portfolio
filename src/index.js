import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import { trackPageView } from './analytics';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithTracking = () => {
  const location = useLocation();

  React.useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <App />;
};

root.render(
  <React.StrictMode>
    <Router>
      <AppWithTracking />
    </Router>
  </React.StrictMode>
);
