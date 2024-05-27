// analytics.js
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-29V6Q5VNF5"; // Your Google Analytics 4 Measurement ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};