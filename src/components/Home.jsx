import React, { useEffect, useState } from 'react';
import './Home.css';
import profilePic from '../assets/anthony.png'; // ✅ Correct image import

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-grid">

        {/* Welcome */}
        <div className="tile tile-2x2">
          <h2>Welcome</h2>
          <p>
            Hi, I'm Anthony Hill, a software developer with a strong focus on frontend development,
            UI/UX design, and user experience.
          </p>
          <p>
            I am a recent 2025 graduate in Software Engineering with a 2:1. I'm currently looking
            for a junior web development role where I can contribute and grow.
          </p>
          <p>
            Feel free to reach out if you have any projects in mind — or just want to say hello!
          </p>

          <div className="welcome-footer">
            <img src={profilePic} alt="Anthony Hill" className="profile-pic" />
            <div className="social-buttons">
              <a href="https://github.com/anthonyhill225" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/anthony-hill-m10/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="tile tile-1x2">
          <h3>About Me</h3>
          <p>
            Hi, I'm Anthony, a front-end software developer from London.
          </p>
          <p>
            My primary tools of choice include HTML, CSS, JavaScript, React, Node.js, and MySQL.
            While I have my preferred tools, I always aim to choose the best one for the job — even
            if it's outside my usual stack.
          </p>
          <p>
            Beyond coding, I'm passionate about design, traveling, fitness, and cooking.
            One of my favorite hobbies is rock climbing, which I've enjoyed since my first year at university.
          </p>
        </div>

        {/* Projects */}
        <div className="tile tile-1x2">
          <h3>Projects</h3>
          <ul>
            <li><strong>LearnCode</strong></li>
            <li><strong>KRAYZ 4 BBQ</strong></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="tile">
          <h3>Contact</h3>
          <p>Email: anthony@example.com</p>
        </div>

        {/* Qualifications */}
        <div className="tile">
          <h3>Qualifications</h3>
          <p>BSc Software Engineering<br />Brighton University</p>
        </div>

        {/* Footer + Time */}
        <div className="tile tile-footer">
  <p>© 2025 · Anthony Hill</p>
  <p className="digital-clock">{time}</p> {/* ✅ Styled digital clock */}
</div>


      </div>
    </div>
  );
};

export default Home;
