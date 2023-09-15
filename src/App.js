import React, { useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { ParticlesContainer } from "./components/bg_particles";

import backgroundImg from './assets/img/banner-bg.png';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.getElementsByClassName("parallax");
      for (let element of parallaxElements) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const speed = parseFloat(element.getAttribute("data-speed"));
        element.style.transform = `translateY(${scrollTop * speed}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App" >
      <AnimatedCursor
        innerSize={15}
        outerSize={16}
        color='69,234,249'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={10}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <NavBar />
     
        <Banner />
   
      <div className="about1">
      <div className="parallax" data-speed="0.3">
        <Skills />
      </div>
      </div>
     
        <Projects />
     
    
      <Contact />
      <Footer />
    </div>
  );
}

export default App;