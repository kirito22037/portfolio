import React from 'react';
import { Link } from 'react-router-dom';

const handleLink = ()=>{
    console.log("clicked");
    window.location.href = '#project-p';
}

const NavBar = () => {

    //return <div></div>
    return <div id="nav-bar">
        
        <ul id="nav-links"  className="float-r">
            <li className="mr-3">
                <Link to='/'><h3>Home</h3></Link>
            </li>
            <li className="mr-3">
                <Link to='/'><h3>About</h3></Link>
            </li>
            <li className="mr-3">
                <Link to="/skills"><h3>Skills</h3></Link>
            </li>
            <li className="mr-3">
                <Link to='/projects'><h3>Projects</h3></Link>
            </li>
        </ul>
    </div>
};


export default NavBar;