import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const [color, setColor]= useState(false);
    const changeColor =  () =>{
      if(window.scrollY>90) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    return <Navbar  variant="light" className={color? 'header header-bg': 'header'}>
    <Container>
      <Nav className="navbr">
        <Nav.Link href="#home" id="clr" >Home</Nav.Link>
        <Nav.Link href="#elements" id="clr">Elements</Nav.Link>
        <Nav.Link href="#views" id="clr">Views</Nav.Link>
        <Nav.Link href="#foots" id="clr">About Us</Nav.Link>
        {/* <Nav.Link href="#pricing">Profile</Nav.Link> */}
      </Nav>
    </Container>
  </Navbar>
}

export default Header;