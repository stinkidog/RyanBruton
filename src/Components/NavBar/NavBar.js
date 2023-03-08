// import './NavBar.css';
// import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { useState, useEffect } from 'react';

// const NavBar = () => {

//     const [toggleMenu, setToggleMenu] = useState(false);
//     const [bgColour, setBgColour] = useState("#ffffff00");

//     const toggleActive = (e) => {

//         if (!e.target.classList.contains('active-link')) {

//             var links = document.getElementsByClassName('link');

//             for (var link of links) {
//                 link.classList.remove('active-link')
//             };

//             if (!e.target.classList.contains('active-link')) {
//                 e.target.classList.add('active-link');
//             }
//         }
//     }

//     const bgStyle = {
//         background: bgColour
//     };

//     useEffect(() => {

//         const changeNavbarBg = () => {

//             window.scrollY >= 83 
//                 ? setBgColour("#070630")
//                 : setBgColour("#ffffff00");
//         }

//         window.addEventListener('scroll', changeNavbarBg);

//         return () => {
//             window.removeEventListener('scroll', changeNavbarBg);
//         };
//     })

//     return (
//         <div className="header__navbar" style={bgStyle}>
//             <div className="header__navbar-container">
//                 <a className="link active-link" onClick={toggleActive} href="#home">Home</a>
//                 <a className="link" onClick={toggleActive} href="#about">About</a>
//                 <a className="link" onClick={toggleActive} href="#blog">Blog</a>
//                 <a className="link" onClick={toggleActive} href="#contact">Contact</a>
//             </div>
//             <div className="header__navbar-menu">
//                 {toggleMenu
//                     ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
//                     : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
//                 {toggleMenu && (
//                     <div className="header__navbar-menu_container">
//                         <div className="header__navbar-menu_container-links">
//                             <p><a className="link active-link" onClick={toggleActive} href="#home">Home</a></p>
//                             <p><a className="link" onClick={toggleActive} href="#about">About</a></p>
//                             <p><a className="link" onClick={toggleActive} href="#blog">Blog</a></p>
//                             <p><a className="link" onClick={toggleActive} href="#contact">Contact</a></p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default NavBar;