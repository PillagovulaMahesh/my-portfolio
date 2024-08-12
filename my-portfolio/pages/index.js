import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Services />
      {/* Add other sections here */}
    </div>
  );
}
