import './about.css'
import Abouthead from './about-head'
import html from '/image/html.png'
import css from '/image/css.png'
import github from '/image/github.png'
import js from '/image/js.png'
import jquery from '/image/jquery.png'
import react from '/image/react.png'
import sass from '/image/sass.png'
import about from '/image/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
export default function Aboutpage(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,      // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh();
      }, []);
    return(
        <div className='about' id='about'>
            <div>
                <h3 data-aos="fade-right">About Me </h3>
                <span></span>
            </div>
           <div className='about-content'>
                    <article data-aos="fade-up"
     data-aos-duration="3000">
<p>Hello! My name is <span>Abhishek Kumar Sethi</span>, and I’m passionate about creating things that live on the internet. I started learning <span>web development</span> in 2022, when I began experimenting with customizing Tumblr themes — creating a simple reblog button taught me a lot about <span>HTML & CSS</span> and sparked my interest in coding.</p>

<p>Since then, I’ve had the privilege of working as a <span>Frontend Developer</span>, gaining experience both as a <span>freelancer</span> and through <span>team collaborations</span>. Today, I specialize in building <span>dynamic</span> and <span>static websites</span>, delivering projects that are responsive, accessible, and user-friendly. My goal is to create digital solutions that not only provide great experiences for users but also help <span>clients grow their business and make a real impact online</span>.</p>

<p>Currently, I’m eager to dive deeper into <span>backend development</span>. I have already started learning the basics of servers, databases, and application architecture, and I’m excited to soon implement these skills in my upcoming projects. This not only expands my technical expertise but also brings me closer to becoming a well-rounded <span>full-stack developer</span>.</p>

                    </article>
                    <figure data-aos="fade-up"
     data-aos-duration="3000">
                       
                        <div>
                            <img src={about} alt="" />
                        </div>
                        <article>
                        <h2>Experience</h2>
                        {/* <p>Currently I'm doing <span>BCA</span> (Bachelor of computer application) from <span>IGNOU</span> and I lives in Delhi India.In my free time I spend time with my family & friends otherwise I try to learn something new and interesting.   </p> */}
                        {/* <ul>
                            <li>Currently I'm doing <span>BCA</span>(Bachelor of computer application) from <span>IGNOU</span></li>
                            <li>I have also done <span>ADCE</span>(Advance Diploma in Computer Application) from <span>IICS</span></li>
                        </ul> */}
<p>I have worked at <span>DesignPond</span> for 6 months as a <span>Frontend Developer</span>, where I gained hands-on experience in building professional, responsive, and user-friendly websites, including <span>dynamic dashboard websites</span>.</p>

<p>I have completed several <span>freelance projects</span>, including a full-stack website, where I solved real-time challenges and gained valuable exposure to <span>backend technologies</span>, servers, and hosting.</p>

                        </article>
                    </figure>
                
           </div>
        </div>
    )
}