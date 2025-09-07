import './project.css'
import furniwebsite from '/image/furni-website.png'
import hightechwebsite from '/image/high-tech-website.png'
import amazon from '/image/amazon.jpg'
import netflix from '/image/netflix.png'
import reactquiz from '/image/react-quiz.jpg'
import weathersite from '/image/weather-site.png'
import lino from '/image/lino.png'
import heavensjourney from '/image/heavens-journey.png'
import designpond1 from '/image/designpond1.png'
import designpond2 from '/image/designpond2.png'
import designpond3 from '/image/designpond3.png'
import synergiapac1 from '/image/synergiapac1.png'
import synergiapac2 from '/image/synergiapac2.png'
import synergiapac3 from '/image/synergiapac3.png'
import heavens1 from '/image/heavens1.png'
import heavens2 from '/image/heavens2.png'

export default function Project(){
        return(
            <section className="project" id='project'>
                <div>
                <h3>My Work</h3>
                <span></span>
            </div>
                <section>
                    <div>
                        <img src={designpond1} alt="" />
                <img src={designpond2} alt="" />
                <img src={designpond3} alt="" />
                    </div>
                    <article>
                        <div>
                            <h2>DesignPond CMS Website</h2>
                            <a href="https://designpond.in/" target='_blank'>Live</a>
                        </div>
                        <p>During my freelance collaboration with DesignPond, I developed the frontend of a fully dynamic, responsive website with complete admin control. The platform allows the team to easily manage projects, stories, and content without technical help.

It features custom media grids for showcasing creative work, a Coffee Break stories section for updates, and a modern design that adapts seamlessly across laptop, tablet, and mobile. This project empowered the agency to maintain their content independently while providing an engaging experience for visitors.</p>

<div>
    <span>REACT Vite</span>
     <span>SASS CSS</span>
      <span>MUI</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MySQL</span>
      <span>JWT</span>
</div>
                    </article>
                </section>
                <p className='line'></p>
                   <section>
                    <div>
                        <img src={synergiapac1} alt="" />
                <img src={synergiapac2} alt="" />
                <img src={synergiapac3} alt="" />
                    </div>
                    <article>
                        <div>
                            <h2>Synergia PAC – Custom CMS Website</h2>
                            <a href="https://www.synergiapac.com/" target='_blank'>Live</a>
                        </div>
                        <p>Excited to share my work on Synergia PAC’s official website, where I developed the frontend of a fully custom-coded CMS from scratch, collaborating with a backend developer. The platform lets the team manage blogs, approve comments, update services dynamically, and maintain FAQs and industries content directly from the dashboard with secure login access.

With a responsive design and full content control, this project empowers the client to update their site independently while providing a seamless experience for all visitors.</p>

<div>
    <span>HTML5</span>
     <span>SASS CSS</span>
      <span>Javascript</span>
      <span>JQuery</span>
      <span>Node-js </span>
      <span>Expres-js</span>
      <span>Mysql Prisma</span>
      
</div>
                    </article>
                </section>
                  <p className='line'></p>
                   <section>
                    <div>
                        <img src={heavens1} alt="" />
                {/* <img src={designpond2} alt="" /> */}
                <img src={heavens2} alt="" />
                    </div>
                    <article>
                        <div>
                            <h2>Heavens-Journey Static Website</h2>
                            <a href="https://heavens-journey.in/" target='_blank'>Live</a>
                        </div>
                       <p>Excited to share my latest freelance project – Heaven’s Journey, a compassionate funeral service website. I developed the frontend of this fully responsive static site, ensuring it works seamlessly across mobiles, tablets, and desktops.

The website offers complete funeral solutions – hearse vans, freezer boxes, rituals, and priest services – all presented with thoughtful design for easy navigation. Hosted for smooth performance, it delivers a seamless experience while reflecting care and professionalism.</p>
<div>
    <span>HTML5</span>
     <span>SASS CSS</span>
      <span>Javascript</span>
      <span>JQuery</span>
      
</div>
                    </article>
                </section>
                 
            </section>
        )
}