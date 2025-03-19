import React from "react";
import "../styles/Home.css";

// Import images correctly
import image3 from "../assets/CCC.JPG";
import image1 from "../assets/RSP/RSP_DC.jpg";
import image4 from "../assets/SC/SC_IR.jpg";
import image2 from "../assets/SP/SP_IGC.jpg";

const Home = () => {
  return (
    <div className="home-container text-center">
      {/* Hero Section */}
      <h1 className="hero-title">Welcome to Welfare Services Club</h1>
      <p className="hero-subtitle">Join us and be part of an exciting volunteering community.</p>
      
      {/* Top Scrolling Carousel (Left) */}
      <div className="carousel-container">
        <div className="carousel-left">
          <img src={image1} alt="Event 1" className="carousel-image" />
          <img src={image2} alt="Event 2" className="carousel-image" />
          <img src={image3} alt="Event 3" className="carousel-image" />
          <img src={image4} alt="Event 4" className="carousel-image" />
        </div>
      </div>
      
      {/* Bottom Scrolling Carousel (Right) */}
      <div className="carousel-container">
        <div className="carousel-right">
          <img src={image2} alt="Event 4" className="carousel-image" />
          <img src={image4} alt="Event 3" className="carousel-image" />
          <img src={image1} alt="Event 2" className="carousel-image" />
          <img src={image2} alt="Event 1" className="carousel-image" />
        </div>
      </div>

      <h2 className="hero-title">About Us</h2>

      <p className="hero-text">NTU Welfare Services Club (WSC) provides an umbrella of voluntary activities 
        and social work to all students. Besides growing from strength to strength in membership, the WSC has also 
        undergone incredible expansions in its activities to reach out to more service users every year. Currently, 
        it runs 9 Regular Service Projects (RSPs) serving the Deaf, Elderly, Children of Low-income Families, Children 
        with Chronic or Terminal Diseases, Intellectually Disabled, People with Mental Health Issues, Physically Challenged, 
        Visually Handicapped and Youths-at-risk, which comprises volunteers engaging these service users weekly at various 
        locations.
        <br />
        <br />
        WSC also runs 5 Special Projects and 5 Supporting Committees. The Special Projects include Camp OutReach, Challenge 
        ur Limits, Ignite Change, Overseas Volunteering Expedition and Volunteer Movement and they provide additional support 
        to service users both locally and overseas. The Supporting Committees include Admin & Liaison, Finance, Growth & 
        Opportunities!, Internal Relations and Publicity and Publications and they provide operational support to WSC. 
        Volunteers engaged in Special Projects and Supporting Committees gain invaluable skills in entrepreneurship, 
        events management, planning, coordination and many more.</p>
    </div>
  );
};

export default Home;
