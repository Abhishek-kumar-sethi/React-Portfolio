// // import './navbar.css'
// // import Navhead from './nav-head'
// // import { useState ,useEffect} from 'react';
// //  export default function Navbar(){
// //    const [activePage, setActivePage] = useState("home");

// //     useEffect(() => {
// //         if (activePage === "home") {
// //             // Add any other effects or actions specific to home
// //         }
// //     }, [activePage]);

// //     const navigateToPage = (page) => {
// //         setActivePage(page);
// //     };
// //     return(
// //     <div className="navbar">
// //        <Navhead navigateToPage={navigateToPage}/>
// //     </div>
// //     )
// // }
// // Navbar.jsx
// import './navbar.css';
// import Navhead from './nav-head';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//     const [activePage, setActivePage] = useState("home");

//     useEffect(() => {
//         if (activePage === "home") {
//             // Add any other effects or actions specific to home
//         }
//     }, [activePage]);

//     const navigateToPage = (page) => {
//         setActivePage(page);
//     };

//     return (
//         <div className="navbar">
//             <Navhead navigateToPage={navigateToPage} />
//         </div>
//     );
// }
import './navbar.css';
import Navhead from './nav-head';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
            <Navhead />
        </div>
        </>
    );
}
