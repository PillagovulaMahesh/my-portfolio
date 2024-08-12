import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h1>Hi, I am <span>Muhammad Umair</span></h1>
        <h2>UI & UX Designer</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
        <button className="hire-me-button">Hire Me</button>
      </div>
      <div className="about-me-image">
        <img src="/images/umair.png" alt="Muhammad Umair" />
      </div>
    </section>
  );
};

export default AboutMe;
