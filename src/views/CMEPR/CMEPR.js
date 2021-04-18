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



function Releases(props) {
    
    return (
      <div style={{ 
        position: "absolute",
        // backgroundImage: `url(${image1})`,
        backgroundColor: "white",
        //backgroundColor: "white",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


</Router>

    <div>
    <h5 style={{
      color:"black", 
      fontSize: "300%",
      fontFamily: "Menlo",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundColor: "white",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "1%",
      marginTop: "1%",
      width: "100%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       CMEPR - Colectivo de Música Experimental de Puerto Rico<br></br></h5>
       </div>

      

       <Container justify="center">
       <Row>
         <Col> <div style={{ 
              display: "inline-block",
              position: "relative",        
              backgroundColor: "none",
              fontFamily: "Menlo",
              color: "black",
              borderWidth:1,
              marginRigth: "0%",
              marginBottom: "0%",
              height: "100%",
              width: "100%",
              border: '1px solid red',
              padding: "10%",
              paddingBottom: "0%"

              }}>
              <p>
              {"CMEPR es el Colectivo de Música Experimental de Puerto Rico. Es un grupo de músicos y compositores de Puerto Rico organizados con la idea de crear, interpretar e improvisar música experimental y eventos de música experimental en Puerto Rico."}<br></br>
              </p>
              </div></Col>
        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=495007303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-27-02-21">CMEPR[27-02-21] by CMEPR - (Colectivo de Música Experimental de Puerto Rico)</a></iframe>
          </Col>
      
         
         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=527915444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-20-03-21">CMEPR[20-03-21] by CMEPR - Colectivo De Música Experimental De Puerto Rico</a></iframe>          </Col>

       
       

        </Row>
    </Container>
    

   </div>
  
    )
  }

  export default Releases
