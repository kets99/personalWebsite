import React from 'react';
import { Link } from 'react-router-dom';


const Education = () => {
    return <div id="education"></div>;
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/education" component={Education}>education</Link></li>
        <li><Link to="/work-experience">work experience</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/contact">contact me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
