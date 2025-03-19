import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import "../styles/Portfolios.css";

// Import RSP images
import DC from "../assets/RSP/RSP_DC.jpg";
import Elders from "../assets/RSP/RSP_Elders.jpg";
import FOC from "../assets/RSP/RSP_FOC.jpg";
import ID from "../assets/RSP/RSP_ID.jpg";
import MH from "../assets/RSP/RSP_MH.jpg";
import OH from "../assets/RSP/RSP_OH.jpg";
import PC from "../assets/RSP/RSP_PC.jpg";
import VH from "../assets/RSP/RSP_VH.jpg";
import Youth from "../assets/RSP/RSP_Youth.png";

// Import SP images
import COR from "../assets/SP/SP_COR.jpg";
import CurL from "../assets/SP/SP_CurL.jpg";
import GO from "../assets/SP/SP_GO.jpg";
import IGC from "../assets/SP/SP_IGC.jpg";
import OVE from "../assets/SP/SP_OVE.jpg";
import VM from "../assets/SP/SP_VM.jpg";

// Import SC images
import AnL from "../assets/SC/SC_AnL.jpg";
import Finance from "../assets/SC/SC_Finance.png";
import IR from "../assets/SC/SC_IR.jpg";
import PnP from "../assets/SC/SC_PnP.jpg";

const Portfolios = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Regular Service Projects</h1>
      
      <div className="portfolio-grid">
        {[ 
          { 
            img: DC, 
            title: "Deaf Community", 
            desc: `RSP DC is a portfolio that aims to raise Deaf awareness 
                   and empower Singapore’s Deaf community by providing tuition 
                   services and planning events for Deaf youths and adults.`,
            link: "https://www.instagram.com/ntuwsc_rspdc/"
          },

          { 
            img: Elders, 
            title: "Elders", 
            desc: `RSP Elders seeks to bridge the generational gap through regular volunteering sessions, 
            festive events and ad-hoc events with seniors from Hospitals to Active Ageing Centres.`,
            link: "https://www.instagram.com/ntuwsc_rspelders/"
          },

          {
            img: FOC, 
            title: "Friends of Children", 
            desc: `RSP Friends of Children offers weekly mentoring and life skills for children (4–17) 
            from low-income families. With 15 centres across Singapore and two annual events, we focus on academic growth, 
            character building, and mentorship.`,
            link: "https://www.instagram.com/ntuwsc_rspfoc/"
          },

          {
            img: ID, 
            title: "Intellectually Disabled", 
            desc: `RSP Intellectually Disabled holds weekly sessions since 1985, promoting awareness of PWIDs, 
            slowing mental deterioration, and fostering independence through engaging activities.`,
            link: "https://www.instagram.com/ntuwsc_rspid/"
          },

          {
            img: MH, 
            title: "Mental Health", 
            desc: `RSP Mental Health raises awareness and destigmatises mental health through weekly interactions, 
            fostering inclusion and bonding with IMH beneficiaries in NTU and Singapore.`,
            link: "https://www.instagram.com/ntuwsc_rspmh/"
          },

          {
            img: OH, 
            title: "Operation Hope", 
            desc: `Regular Service Project (Operation Hope) supports children with chronic illnesses, 
            spreading love and care through meaningful interactions, guided by the motto, "Where Love Meets Action."`,
            link: "https://www.instagram.com/ntuwsc_rspoh/"
          },

          {
            img: PC, 
            title: "Physically Challenged", 
            desc: `Regular Service Project (Physically Challenged) strives to reconnect and integrate the Physically Challenged 
            community with society. On top of this, RSP (Physically Challenged) also strives to correct the misconception people 
            have with the physically challenged.`,
            link: "https://www.instagram.com/ntuwsc_rsppc/"
          },

          {
            img: VH, 
            title: "Vision of Hope", 
            desc: `RSP Vision of Hope supports people with visual impairment through befriending, empowerment, and raising awareness. 
            Partnering with GDS, we strive to create a more inclusive community for everyone.`,
            link: "https://www.instagram.com/ntuwsc_rspvh/"
          },

          {
            img: Youth, 
            title: "Youth", 
            desc: `At RSP Youth, we serve as mentors to aid students in weekly after-school programs for their academic subjects. 
            We offer coaching to small batches of at-risk or underprivileged primary to tertiary students, inspiring them toward 
            personal development and skill growth.`,
            link: "https://www.instagram.com/ntuwsc_rspyouth/"
          }

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
          {
            img: IGC, 
            title: "Ignite Change", 
            desc: `Our annual NTU Transition & Orientation Programme offers a unique approach by combining volunteerism 
            with fun and meaningful activities, setting it apart from traditional orientation`,
            link: "https://www.instagram.com/ntuwsc_igc/"
          },

          {
            img: COR, 
            title: "Camp Outreach", 
            desc: `Camp OutReach (COR) raises awareness and bridges gaps between the Deaf and hearing through empowering events, 
            volunteering, and an annual Overseas Community Engagement Programme (OCEP) supporting communities in need.`,
            link: "https://www.instagram.com/ntuwsc_cor/"
          },

          {
            img: CurL, 
            title: "Challenge ur Limits", 
            desc: `Challenge ur Limits (CurL) organises events for individuals with special needs, volunteers, 
            and the public to engage in empowering activities, promoting inclusivity and showcasing abilities beyond disabilities.`,
            link: "https://www.instagram.com/ntuwsc_curl/"
          },

          {
            img: GO, 
            title: "Growth & Opportunities!", 
            desc: `Growth & Opportunities! (GO!) provide the NTU community a platform to explore new opportunities and 
            support new causes outside the current boundaries of WSC. Our goal is to raise awareness about various social causes 
            and promote the spirit of volunteerism.`,
            link: "https://www.instagram.com/ntuwsc_go/"
          },

          {
            img: OVE, 
            title: "Overseas Volunteering Projects", 
            desc: `SP OVE is a student-led group, that organises overseas volunteering projects, planning activities and 
            fundraising to improve the quality of life for the underprivileged communities globally.`,
            link: "https://www.instagram.com/ntuwsc_ove/"
          },

          {
            img: VM, 
            title: "Volunteer Movement", 
            desc: `SP Volunteer Movement is a team dedicated to spreading volunteerism beyond WSC while engaging with a 
            wide range of service users. We rally NTU students for events like Kids’ World, offering sustainable platforms 
            for community service through annual events and monthly volunteering opportunities.`,
            link: "https://www.instagram.com/ntuwsc_vm/"
          }

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

      <h1 className="portfolio-header">Supporting Committees</h1>
      
      <div className="portfolio-grid">
        {[ 
          {
            img: IR, 
            title: "Internal Relations", 
            desc: `Internal Relations (IR) facilitates inter-portfolio social cohesion through organising bonding activities 
            and community service projects. These include club-wide events such as WSC Bonding Day, Bienestar 
            Exam Welfare Pack initiative and Annual Appreciation Dinner, where we recognise the achievements of our student volunteers.`,
            link: "https://www.instagram.com/ntuwsc_ir/"
          },

          {
            img: PnP, 
            title: "Publicity and Publications", 
            desc: `SC Publicity and Publications (PnP) provides extensive and professional publicity and media coverage for the club’s activities and events. 
            Our dynamic family comprises four divisions – Design, Digital Imaging, Journalism and Media Development.`,
            link: "https://www.instagram.com/ntuwsc_pnp/"
          },

          {
            img: AnL, 
            title: "Admin & Liaison", 
            desc: `SC Admin & Liaison supports WSC by handling operations, enabling respective WSC portfolios to focus on their goals, 
            and generating data for impact evaluation.`,
            link: "https://www.instagram.com/ntuwsc_anl/"
          },

          {
            img: Finance, 
            title: "Finance", 
            desc: `Finance Committee manages the allocated budget from the Finance Office across all portfolios within WSC. 
            Their support in the financial aspect of each portfolio’s operations enables them to focus on and achieve their respective objectives and goals.`,
            link: "https://www.instagram.com/ntuwsc/"
          }

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
