import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Media from 'react-bootstrap/Media';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import image1 from "./glitch3.png";


function Components(props) {
    
    return (
      <div style={{ 
        position: "absolute",
        backgroundImage: `url(${image1})`,
        backgroundColor: "white",
        //backgroundColor: "white",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "170%",
        width: "100%",
        padddingRigth: "0px",
        paddingBottom: "0px",
        margin: 0,
        padding: 0
        
        }}>
    <Router>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand >Roy F Guzmán</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="bio">Bio</Nav.Link>
      <NavDropdown title="Works" id="basic-nav-dropdown">
        <NavDropdown.Item href="abolengo">Abolengo</NavDropdown.Item>
        <NavDropdown.Item href="electro-acoustic">Electro-Acoustic</NavDropdown.Item>
        <NavDropdown.Item href="instrumental">Instrumental</NavDropdown.Item>
        <NavDropdown.Item href="collaborations">Collaborations</NavDropdown.Item>
        <NavDropdown.Item href="cmepr">CMEPR</NavDropdown.Item>
        <NavDropdown.Item href="scores">Scores</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
 
  </Navbar.Collapse>
</Navbar>


</Router>

    <div>
    <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "300%",
      fontFamily: "Menlo",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      // backgroundColor: "none",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "10%",
      marginTop: "10%",
      width: "40%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       {"Roy F Guzmán"}</p>
       </div>
       <p style={{
          display: "inline-block",
          position: "relative",
      color:"white", 
      fontSize: "200%",
      fontFamily: "Menlo",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      // backgroundColor: "none",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "35%",
      marginTop: "0%",
      width: "45%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       {"[composer]"}<br></br>
        {"[poet]"}<br></br>
        {"[conceptual artist]"}<br></br>
        {"[plastic sound sculptor]"}<br></br>
       <br></br></p>
      

       

   </div>
  
    )
  }

  export default Components
