import React from 'react';
//import { Link } from 'react-router-dom';

const handleLink = ()=>{
    console.log("clicked");
    window.location.href = '#project-p';
}

const NavBar = () => {

    return <div id="nav-bar">
        
        <ul id="nav-links"  className="float-r">
            <li className="mr-3">
            <a href='#home-p'><h3>Home</h3></a>
            </li>
            <li className="mr-3">
                <a href='#home-p'><h3>About</h3></a>
            </li>
            <li className="mr-3">
                <a href="#skill-p"><h3>Skills</h3></a>
            </li>
            <li className="mr-3">
                <a href='#project-p'><h3>Projects</h3></a>
            </li>
        </ul>
    </div>
};


export default NavBar;