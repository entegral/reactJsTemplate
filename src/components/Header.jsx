import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  
  const componentStyle = {
    display: 'inline',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };


  return (
    <div>
      <ul>
        <Link to="/">Home | </Link>
        <Link to="/">About | </Link>
        <Link to="/">Sign Up | </Link>
        <Link to="/">Login </Link>
      </ul>
      <hr/>
    </div>
  );
}

export default Header;