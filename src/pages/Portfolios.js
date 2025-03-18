import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import "../styles/Portfolios.css";

// Import images
import image1 from "../assets/AAA.JPG";
import image2 from "../assets/BBB.JPG";
import image3 from "../assets/CCC.JPG";
import image4 from "../assets/DDD.JPG";

const Portfolios = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Regular Service Projects</h1>
      
      <div className="portfolio-grid">
        {[ 
          { img: image1, title: "Elders", desc: "Description of the first project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image2, title: "Youth", desc: "Description of the second project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image3, title: "Vision of Hope", desc: "Details about the third project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image4, title: "Deaf Community", desc: "Summary of the fourth project.", link: "https://www.instagram.com/ntuwsc_igc/" }
        ].map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.img} alt={project.title} className="portfolio-image" />
            <div className="portfolio-text">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="ig-link">
                <FaInstagram className="ig-icon" style={{ color: "#E1306C", fontSize: "1.5rem" }} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h1 className="portfolio-header">Special Projects</h1>
      
      <div className="portfolio-grid">
        {[ 
          { img: image1, title: "Ignite Change", desc: "Description of the first project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image2, title: "Challenge ur Limit", desc: "Description of the second project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image3, title: "Volunteer Movement", desc: "Details about the third project.", link: "https://www.instagram.com/ntuwsc_igc/" },
          { img: image4, title: "Growth & Opportunities!", desc: "Summary of the fourth project.", link: "https://www.instagram.com/ntuwsc_igc/" }
        ].map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.img} alt={project.title} className="portfolio-image" />
            <div className="portfolio-text">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="ig-link">
                <FaInstagram className="ig-icon" style={{ color: "#E1306C", fontSize: "1.5rem" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
