import './skills.css'
import html from '/image/html.png'
import css from '/image/css.png'
import github from '/image/github.png'
import git from '/image/git.png'
import js from '/image/js.png'
import jquery from '/image/jquery.png'
import react from '/image/react.png'
import sass from '/image/sass.png'
import bootstrap from '/image/bootstrap.png'
export default function Skills(){
    return(
        <section className="skills" id='skills'>
             <div>
                <h3>Skills I have</h3>
                <span></span>
            </div>
            <section>
                 <figure>
                        <h2>Technologies I know</h2>
                        <div>
                            <span>HTML5</span>
                            <span>css3 sass</span>
                            <span>BootStrap</span>
                            <span>javscript</span>
                            <span>jquery</span>
                            <span>React & Vite</span>
                            <span>Git/Github</span>
                            <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}>CI/CD BASICS</span>
                            <span>Chrome Dev Tools</span>
                        </div>
                </figure>
                <article>
                    <h2>Some Minor Project</h2>
                    <div>
                        <button><a href="https://aks-react-furni-website.netlify.app/" target='_blank'>React Furni Website</a></button>
                        <button><a href="https://aks-high-tech-website.netlify.app/" target='_blank'>High Tech Website</a></button>
                        <button><a href="https://aks-amazon-clone1.netlify.app/" target='_blank'>Amazon clone</a></button>
                        <button><a href="https://abhishek-sethi-portfolio.netlify.app/" target='_blank'>MY OLD PORTFOLIO</a></button>
                        <button><a href="https://aks-weather-site.netlify.app/" target='_blank'>Weather Website</a></button>
                        <button><a href="https://aks-react-quiz.netlify.app/" target='_blank'>React Quiz Game</a></button>
                         <button><a href="https://aks-netlify-test.netlify.app/" target='_blank'>Expenses tracker</a></button>
                    </div>
                </article>
            </section>
        </section>
    )
}