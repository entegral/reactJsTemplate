import React from "react";

function Header(){
  
  const componentStyle = {
    display: "inline",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "black"
  }
  
  
  return (
    <div>
      <ul>
        <li style={componentStyle}><a style={linkStyle} href="#">Home | </a></li>
        <li style={componentStyle}><a style={linkStyle} href="#">Link | </a></li>
        <li style={componentStyle}><a style={linkStyle} href="#">Contact | </a></li>
        <li style={componentStyle}><a style={linkStyle} href="#">Login </a></li>
      </ul>
      <hr/>
    </div>
  );
}

export default Header;