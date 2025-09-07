import './home-content.css'

import Cardcontent from './card-content.jsx'
import Homefooter from './home-footer.jsx'
import Aboutpage from './about.jsx'
import Abhishekkumarsethiresume from '/Abhishek-kumar-sethi-resume.pdf'; // Adjust the path as needed
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Homecontent(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,      // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh();
      }, []);
    return(
            <div className="home" id='home'>
                <div>
                    <h4 data-aos="fade-down" data-aos-duration="1500">Hi, my name is</h4>
                    <h1 data-aos="fade-down" data-aos-duration="3000">Abhishek Sethi</h1>
                    <h1 data-aos="fade-down" data-aos-duration="4000">I'm build frontend for web.</h1>
                    <p data-aos="fade-down" data-aos-duration="5000">I am a Frontend Developer with 1 year of experience, specializing in creating responsive and dynamic web interfaces. Skilled in HTML, CSS, JavaScript, jQuery, Bootstrap, SASS, and React, I deliver clean, efficient, and user-friendly web solutions.

I have worked on both static and dynamic websites, ranging from business sites to interactive web applications. You can check out my projects below to see how I turn ideas into functional, modern, and engaging digital experiences.

Whether you need a professional website, personal portfolio, or a custom dynamic application, I focus on delivering solutions that are optimized, scalable, and tailored to your needs.</p>
                    <div className='btn'>
                    <button><a href={Abhishekkumarsethiresume}>RESUME</a></button>
                    </div>
                </div>
            </div>
            
      
    )
}