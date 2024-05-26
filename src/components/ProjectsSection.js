import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from "./Cards";
import photo1 from "../assets/images/photo5.jpg";
import photo2 from "../assets/images/photo6.jpg";
import photo3 from "../assets/images/photo3.jpg";
import "./ProjectsSection.css";

const projects = [
  { title: "Mangata & Gallo", description: "A web app for a jewelry store with user login/registration. Currently working on it's online shop.", imageSrc: photo1 },
  { title: "Little Lemon Restaurant", description: "A web app for the Little Lemon Restaurant. Users are able to make online reservations.", imageSrc: photo2 },
 /*{ title: "Supermarket List App", description: "Mobile app to keep on track with your groceries shopping lists.", imageSrc: photo3 },*/
];

const ProjectsSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="projects-section" id="projects-section">
      <h1>Featured Projects</h1>
      <div className="projects-grid" data-aos="fade-up">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} imageSrc={project.imageSrc} data-aos="fade-up" data-aos-delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
