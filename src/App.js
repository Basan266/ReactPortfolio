import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCode, FaAndroid, FaDesktop, FaBriefcase, FaSchool  } from "react-icons/fa";
import gamingpc from './Assets/gamingpc.png';
import nastyImg from './Assets/nasty.png';
import mathkingdomImg from './Assets/math.jpg';
import calculatorImg from './Assets/calculator.png';
import juanImg from './Assets/juan.png';
import ParticleBackground from "./ParticleBackground"; // import this



import timelineElements from "./timelineElements";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './App.css';
import "./timelineOverride.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000  });
  }, []);

  const workIconStyles = { background: "#333", color: "#fff" }; // or any bg you want
  const schoolIconStyles = { background: "#333", color: "#fff" }; // white icon text


  

  return (

    <div className="App">
   <ParticleBackground />
    <nav className="navbar">
    <div className="logo"> <a href='#Home'>Your Developer</a></div>
      <ul className="nav-links">
      <li><a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>


  {/* Home section */}

    <div id="Home" className="container" >
        {/* Left side: Text content */}
        <div className="text-content" >
     
          <h1>Hi, I,m  <span>Robert</span></h1>
          <h3>
              I'm a{" "}
              <span style={{ color: "#00bfff", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "Frontend Developer "
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>



    <div className='Home'>
    <img src={gamingpc} alt="Profile" />
    </div>


        {/* about section */}

    <div id="About" className="title-skill" data-aos="fade-down">
        <h1 className="our-skill">Our<span>Skill</span></h1>
        <p className='skill-summary'>I'm an IT Junior Developer still learning and growing in web and mobile development. I have some experience with HTML, CSS, JavaScript, React, and Android using Java and XML. I also help with desktop support through virtual machines. I enjoy learning new things and doing my best to build simple and useful solutions.</p>
        </div>

      <div className="skills">
    
        <div className="android" data-aos="fade-right">
        <div className="iconAbout"><FaCode /></div>
          <h1 className="webtitle">Web Development</h1>
          <p className="label">I have some experience creating websites using HTML, CSS, JavaScript, and React. I'm still learning, but I enjoy improving my skills and building simple, functional, and user-friendly designs.</p>
          <button className="action-btnAbout">Learn More</button>
        </div>

        <div className="web" data-aos="fade-up">
        <div className="iconAbout"><FaAndroid /></div>
          <h1 className="webtitle">Android Development</h1>
          <p className="label">I have some experience creating Android applications using Java and XML. I'm still learning, but I enjoy improving my skills and building simple, functional, and user-friendly mobile apps. </p>
          <button className="action-btnAbout">Learn More</button>
        </div>
        
        <div className="support" data-aos="fade-left">
        <div className="iconAbout"><FaDesktop /></div>
          <h1 className="webtitle">Desktop Support</h1>
          <p className="label">I have some experience providing desktop support through remote access and virtual machines. I'm still learning, but I enjoy helping users and solving technical issues for the client.</p>
          <button className="action-btnAbout">Learn More</button>
        </div>

      </div>    

        
  {/* timeline section */}

<div className='timeline'>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <FaBriefcase /> : <FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>




  {/* timeline language */}
      <div className="languages">
      <div className="language-item" data-aos="fade-right">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="language-item" data-aos="fade-right">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
        <p>CSS</p>
      </div>
      <div className="language-item" data-aos="fade-right">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="language-item" data-aos="fade-right">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" />
        <p>Unity</p>
      </div>
      <div className="language-item" data-aos="fade-left">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
        <p>C#</p>
      </div>
      <div className="language-item" data-aos="fade-left">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android Studio" />
        <p>Android Studio</p>
      </div>
      <div className="language-item" data-aos="fade-left">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <p>React</p>
      </div>
      <div className="language-item" data-aos="fade-up">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
        <p>Firebase</p>
      </div>
      <div className="language-item" data-aos="fade-up">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
        <p>MySQL</p>
      </div>
      <div className="language-item" data-aos="fade-up">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
        <p>Google Cloud</p>
      </div>
      <div className="language-item" data-aos="fade-up">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Virtual Machine" />
        <p>Virtual Machine</p>
      </div>
    </div>
    


  {/* My Projects */}
  <div id="Projects" className="title-skill" data-aos="fade-down" >
  <h1 className="our-skill">My<span>Projects</span></h1>
  <p className='skill-summary'>These projects represent the milestones I’ve achieved throughout my journey as a junior IT developer over the past few years. Each one has played a significant role in shaping my skills, broadening my knowledge, and deepening my understanding of various technologies and development practices. While I still consider myself in the early stages of my career, I take pride in the progress I’ve made and the dedication I’ve put into continuously learning and improving. I remain committed to growing as a developer, embracing every opportunity to contribute, collaborate, and create meaningful solutions through technology.</p>
</div>

<div className="projects">
  <div className="project-card" data-aos="fade-right">
    <img src={nastyImg} alt="NASTY PH GENERATOR" />
    <div className="project-title">NASTY PH GENERATOR</div>
    <p className="project-desc">A web-based raffle number generator designed for quick, fair, and randomized results. Built with HTML, CSS, and JavaScript, this tool was developed to assist in event-based raffles or classroom giveaways. It enhanced my understanding of random logic and user interface feedback through creative styling and DOM manipulation.</p>
    <div className="tech-names">
      <span className="html">HTML</span>
      <span className="css">CSS</span>
      <span className="js">JavaScript</span>
    </div>
  </div>

  <div className="project-card" data-aos="fade-up">
    <img src={mathkingdomImg} alt="MATHKINGDOM PROJECT" />
    <div className="project-title">MATH CAPSTONE PROJECT</div>
    <p className="project-desc">A gamified learning platform aimed at helping students improve their basic math skills. Designed as a capstone project, it uses Unity and Piskel for visuals and C# for logic. It challenged my creativity in combining education and entertainment to support learners struggling in mathematics through fun gameplay.</p>
    <div className="tech-names">
      <span className="unity">Unity</span>
      <span className="piskel">Piskel</span>
      <span className="csharp">C#</span>
    </div>
  </div>

  <div className="project-card" data-aos="fade-up">
    <img src={calculatorImg} alt="CALCULATOR PROJECT" />
    <div className="project-title">SIMPLE CALCULATOR PROJECT DES.</div>
    <p className="project-desc">This basic calculator web app was created as a starter project to understand logic building and layout design. It performs simple arithmetic operations and was built using only HTML, CSS, and JavaScript. It solidified my foundations in handling user input, events, and responsive UI design. And this is my first pratice to enhance my knowledge.</p>
    <div className="tech-names">
      <span className="html">HTML</span>
      <span className="js">JavaScript</span>
      <span className="css">CSS</span>
    </div>
  </div>

  <div className="project-card" data-aos="fade-left">
    <img src={juanImg} alt="CALCULATOR PROJECT" />
    <div className="project-title">JUAN CAST APP</div>
    <p className="project-desc">This basic calculator web app was created as a starter project to understand logic building and layout design. It performs simple arithmetic operations and was built using only HTML, CSS, and JavaScript. It solidified my foundations in handling user input, events, and responsive UI design. And this is my first pratice to enhance my knowledge.</p>
    <div className="tech-names">
      <span className="html">Android Studio</span>
      <span className="js">Firebase</span>
      <span className="css">xml</span>
    </div>
  </div>
</div>


 {/* My Testimonials */}


 <div className="testimonials-section">
  <h4 className="section-subtitle"  data-aos="fade-right">WHAT OTHERS SAY</h4>
  <h2 className="section-title"  data-aos="fade-right">Testimonials</h2>
  <p className='testimonial-summary'  data-aos="fade-right">I'm an IT Junior Developer still learning and growing in web and mobile development. I have some experience with HTML, CSS, JavaScript, React, and Android using Java and XML. I also help with desktop support through virtual machines. I enjoy learning new things and doing my best to build simple and useful solutions.</p>


  <div className="testimonials"  data-aos="fade-left">
    <div className="testimonial-card">
      <p>“I thought it was impossible to do all of that in just a few weeks, but this developer made it happen. Vision and execution were on point!”</p>
      <div className="testimonial-footer">
      <img src={juanImg} alt="CALCULATOR PROJECT" />
      <span>Sandra Lee</span>
      </div>
    </div>

    <div className="testimonial-card" data-aos="fade-left">
      <p>“I’ve never met a web developer who’s this committed to quality and deadlines. Absolutely impressed with the output and communication.”</p>
      <div className="testimonial-footer">
      <img src={juanImg} alt="CALCULATOR PROJECT" />
      <span>Chris Brown</span>
      </div>
    </div>

    <div className="testimonial-card" data-aos="fade-left">
      <p>“After working on multiple projects, I can confidently say this is top-tier work. Reliable, consistent, and creative — can’t thank them enough!”</p>
      <div className="testimonial-footer">
      <img src={juanImg} alt="CALCULATOR PROJECT" />
      <span>Liza Wang</span>
      </div>
    </div>
  </div>
</div>

{/* contact section */}

<div id="Contact" className="contact-section">
  <h2  data-aos="fade-down">Contact Us</h2>

  <div className="contact-options">

    <div className="contact-card" data-aos="fade-up">
      <img
        src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
        alt="Phone Icon"
        width="40"
      />
      <h3>BY PHONE</h3>
      <p>We're here to help, 24/7.</p>
      <p>
        Contact Number 1<br /><strong>0931-023-0820</strong>
      </p>
      <p>
      Contact Number 2<br /><strong>0931-023-0820</strong>
      </p>
    </div>

    <div className="contact-card"  data-aos="fade-up">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
        alt="Form Icon"
        width="40"
      />
      <h3>START A NEW CASE</h3>
      <p>Submit your questions or concerns via our form and we’ll assist you.</p>
      <button>START HERE</button>
    </div>

    <div className="contact-card"  data-aos="fade-up">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
        alt="Chat Icon"
        width="40"
      />
      <h3>LIVE CHAT</h3>
      <p>Chat with a member of our in-house team.</p>
      <button>START CHAT</button>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
