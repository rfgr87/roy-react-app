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

import image1 from "./glitch4.png";


function Releases(props) {
    
    return (
      <div style={{ 
        position: "absolute",
        backgroundImage: `url(${image1})`,
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
        <NavDropdown.Item href="scores">Scores</NavDropdown.Item>
        <NavDropdown.Item href="texts">Texts</NavDropdown.Item>



      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>

    <div>
    <h5 style={{
      color:"white", 
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
      width: "0%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       Abolengo<br></br></h5>
       </div>

      

       <Container justify="center">
       <Row>
         <Col> <div style={{ 
              position: "relative",
             
              backgroundColor: "none",
              fontFamily: "Menlo",
              color: "white",
              // borderColor: "black",
              // borderWidth: 1,
              borderWidth:1,
              marginTop: "30%",
              width: "100%",
              border: '1px solid red',
              paddingTop: "2%"

              }}>
              <p>
              {"An improvisatory experimental abstract folkloric trio based on the principal musical arquetipes of the Puerto Rican heritage, the indigenous flutes, the afro decendent barril of Bomba and the jíbaro puertorrican cuatro."}<br></br>
              </p>
              </div></Col>
        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2597688022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abolengo-01-08-21">Abolengo[01-08-21] by Daniel Ramirez, Luigie Vazquez, Roy F Guzmán</a></iframe>        </Col>
         
         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3919403530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abolengo-15-03-21">Abolengo[15-03-21] by Daniel Ramirez, Luigie Vazquez, Roy F Guzmán</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1307269530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abolengo-04-08-21">Abolengo[04-08-21] by Roy F Guzmán, Daniel Ramirez, Luigie Vazquez</a></iframe>
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=641119861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abolengo-03-04-21">Abolengo[03-04-21] by Roy F Guzmán</a></iframe>
          </Col>

        

          

        </Row>
    </Container>
    

   </div>
  
    )
  }

  export default Releases
