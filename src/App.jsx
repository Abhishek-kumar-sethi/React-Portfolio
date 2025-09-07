// // // import './App.css'
// // // import Navbar from './navbar'
// // // import Homecontent from './home-content'
// // // import Aboutpage from './about'
// // // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // // // import Navhead from './nav-head';
// // // import Project from './project';
// // // import Skills from './skills';

// // // import Navhead from './nav-head';
// // // import { useState ,useEffect} from 'react';
// // // function App() {
// // //     const [activePage, setActivePage] = useState("home");

// // //     useEffect(() => {
// // //         if (activePage === "home") {
// // //             // Add any other effects or actions specific to home
// // //         }
// // //     }, [activePage]);

// // //     const navigateToPage = (page) => {
// // //         setActivePage(page);
// // //     };

// // //     const spanStyle = (spanIndex) => ({
// // //         backgroundColor: activePage === "home" && spanIndex === 0 ? "lightblue" : "red"
// // //     });

   
// // // //   const router = createBrowserRouter([
// // // //     {
// // // //        path:"/",
// // // //        element:<><Navbar/><Homecontent/></>
// // // //     },
// // // //     {
// // // //        path:"/home",
// // // //        element:<><Navbar/><Homecontent/></>
// // // //     },
// // // //     {
// // // //        path:"/about",
// // // //        element:<><Navbar/><Aboutpage/></>
// // // //     }
// // // //  ])
// // //   return(
// // //  //  <div className="navbar">
// // //  //     <Navhead/>
// // //  //  </div>
// // // //  <>
// // // //  <RouterProvider router={router}/>
// // // // </>
// // // <>

// // // <section className='app-page'>
// // //     <div> <Navbar/></div>
    
// // //     <div className='app-page-div2'>
// // //       <div>
// // //       {/* <Homecontent/>
// // //       <Aboutpage/>
// // //       <Project/>
// // //       <Skills/> */}
// // //       {activePage === "home" && <Homecontent />}
// // //       {activePage === "about" && <Aboutpage/>}
// // //       {activePage === "projects" && <Project />}
// // //       {activePage === "contact" && <Skills/>}
// // //       </div>
// // //       <section>
// // //       <span style={spanStyle(0)}></span>
// // //             <span style={spanStyle(1)}></span>
// // //             <span style={spanStyle(2)}></span>
// // //             <span style={spanStyle(3)}></span>
// // //             <span style={spanStyle(4)}></span>
// // //       </section>
// // //     </div>
// // // </section>
// // // {/* Render components based on activePage */}

// // // </>
// // //   )
// // // }

// // // export default App
// // // App.jsx
// // import './App.css';
// // import Navbar from './navbar';
// // import Homecontent from './home-content';
// // import Aboutpage from './about';
// // import Project from './project';
// // import Skills from './skills';
// // import { useState, useEffect } from 'react';

// // function App() {
// //     const [activePage, setActivePage] = useState("home");

// //     useEffect(() => {
// //         if (activePage === "home") {
// //             // Add any other effects or actions specific to home
// //         }
// //     }, [activePage]);

// //     const navigateToPage = (page) => {
// //         setActivePage(page);
// //     };

// //     const spanStyle = (spanIndex) => ({
// //         backgroundColor: activePage === "home" && spanIndex === 0 ? "lightblue" : "red"
// //     });

// //     return (
// //         <section className='app-page'>
// //             <div>
// //                 <Navbar navigateToPage={navigateToPage} />
// //             </div>

// //             <div className='app-page-div2'>
// //                 <div>
// //                     {/* Render components based on activePage */}
// //                     {activePage === "home" && <Homecontent />}
// //                     {activePage === "about" && <Aboutpage />}
// //                     {activePage === "projects" && <Project />}
// //                     {activePage === "skills" && <Skills />}
// //                 </div>
// //                 <section>
// //                     <span style={spanStyle(0)}></span>
// //                     <span style={spanStyle(1)}></span>
// //                     <span style={spanStyle(2)}></span>
// //                     <span style={spanStyle(3)}></span>
// //                     <span style={spanStyle(4)}></span>
// //                 </section>
// //             </div>
// //         </section>
// //     );
// // }

// // export default App;
// import './App.css';
// import Navbar from './navbar';
// import Homecontent from './home-content';
// import Aboutpage from './about';
// import Project from './project';
// import Skills from './skills';

// function App() {
//     return (
//         <>
//             <section className='app-page'>
//                 <Navbar />
//                 <div className='app-page-div2'>
//                     <div>
//                       <div id="home"><Homecontent /></div>
//                       <div id="about"><Aboutpage /></div>
//                       <div id="projects"><Project /></div>
//                       <div id="skills"><Skills /></div>
//                     </div>
//                     <section>
//                     <span style={{ backgroundColor: "red" }}></span>
//                     <span style={{ backgroundColor: "red" }}></span>
//                     <span style={{ backgroundColor: "red" }}></span>
//                     <span style={{ backgroundColor: "red" }}></span>
//                 </section>
//                   </div>
                
//             </section>
//         </>
//     );
// }

// export default App;

// import './App.css';
// import Navbar from './navbar';
// import Homecontent from './home-content';
// import Aboutpage from './about';
// import Project from './project';    
// import Skills from './skills';
// import { useState, useEffect } from 'react';
// import Contact from './contact';
// import Footer from './footer';
// function App() {
//     const [activePage, setActivePage] = useState("home");
//     const handleScroll = () => {
//         const sections = document.querySelectorAll("div[id]");
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
//                 setActivePage(section.id);
//             }
//         });
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const spanStyle = (spanIndex) => ({
//         backgroundColor: activePage === "home" && spanIndex === 0
//             ? "#00909c"
//             : activePage === "about" && spanIndex === 1
//             ? "#00909c"
//             : activePage === "projects" && spanIndex === 2
//             ? "#00909c"
//             : activePage === "skills" && spanIndex === 3
//             ? "#00909c"
//             : activePage === "contact" && spanIndex === 4
//             ? "#00909c"
//             : "#ffffff4d" 
//     });
//     return (
//         <>
//             <section className='app-page'>
//                 <Navbar />
//                 <div className='app-page-div2' >
//                     <div>
//                       <div id="home"><Homecontent /></div>
//                       <div id="about"><Aboutpage /></div>
//                       <div id="projects"><Project /></div>
//                       <div id="skills"><Skills /></div>
//                       <div id="contact"><Contact /></div>
//                       <div><Footer/></div>
//                     </div>
//                     <section>
//                       <span style={spanStyle(0)}></span>
//                       <span style={spanStyle(1)}></span>
//                       <span style={spanStyle(2)}></span>
//                       <span style={spanStyle(3)}></span>
//                       <span style={spanStyle(4)}></span>
//                 </section>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default App;


import './App.css';
import Navbar from './navbar';
import Homecontent from './home-content';
import Aboutpage from './about';
import Project from './project';
import Skills from './skills';
import { useState, useEffect } from 'react';
import Contact from './contact';
import Footer from './footer';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Soft water-like glow layer */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}


function App() {
  const [activePage, setActivePage] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("div[id]");
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActivePage(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll on span click
  const handleSpanClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const spanStyle = (spanIndex) => ({
    backgroundColor: activePage === "home" && spanIndex === 0
      ? "#00909c"
      : activePage === "about" && spanIndex === 1
      ? "#00909c"
      : activePage === "projects" && spanIndex === 2
      ? "#00909c"
      : activePage === "skills" && spanIndex === 3
      ? "#00909c"
      : activePage === "contact" && spanIndex === 4
      ? "#00909c"
      : "#ffffff4d",
    cursor: "pointer"
  });

  return (
    <>
      {/* ✅ Custom Cursor */}
      <Cursor />

      <section className='app-page'>
        <Navbar />
        <div className='app-page-div2'>
          <div>
            <div id="home"><Homecontent /></div>
            <div id="about"><Aboutpage /></div>
            <div id="projects"><Project /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
            <div><Footer /></div>
          </div>
          <section>
            <span style={spanStyle(0)} onClick={() => handleSpanClick("home")}></span>
            <span style={spanStyle(1)} onClick={() => handleSpanClick("about")}></span>
            <span style={spanStyle(2)} onClick={() => handleSpanClick("projects")}></span>
            <span style={spanStyle(3)} onClick={() => handleSpanClick("skills")}></span>
            <span style={spanStyle(4)} onClick={() => handleSpanClick("contact")}></span>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
