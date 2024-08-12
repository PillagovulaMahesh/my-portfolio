import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-list">
        <div className="service-item">
          <img src="/images/uiux-icon.png" alt="UI/UX" />
          <h3>UI/UX</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="service-item">
          <img src="/images/webdesign-icon.png" alt="Web Design" />
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="service-item">
          <img src="/images/appdesign-icon.png" alt="App Design" />
          <h3>App Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="service-item">
          <img src="/images/graphicdesign-icon.png" alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
