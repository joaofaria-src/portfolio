import React, { useEffect } from "react";
import Typing from "react-typing-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./LandingSection.css";
import profilepic from "../assets/images/profilepic2.jpg";

const LandingSection = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="landing-section">
      <div className="landing-content">
        <img 
          className="avatar" 
          src={profilepic} 
          alt="João" 
          data-aos="fade-right" 
        />
        <div className="bio-container">
          <h1>
            <Typing
              text={[
                "Hello, I am João!",
                "A front-end developer",
                "Specialized in React"
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={1000}
              eraseDelay={1000}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
