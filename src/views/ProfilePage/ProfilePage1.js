import React from "react";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "/src/components/Grid/GridItem.js";

import image1 from "./roy-fotos/TainoHombreFractal.png";
import image2 from "./roy-fotos/roy1.jpg";


export default function ProfilePage1(props) {
 
  return (
    <div>
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
<div style={{ 
      position: "absolute",
      backgroundImage: `url(${image1})`,
      // backgroundColor: 
      backgroundColor: "white",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      padddingRigth: "0px",
      paddingBottom: "0px",
      margin: 0,
      padding: 0
      }}>

<div style={{ 
          position: "relative",
          backgroundImage: `url(${image2})`,
          height: "290px",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "300px",
          padddingRigth: "45px",
          paddingBottom: "200px",
          margin: 0,
          marginTop: "3%",
          marginLeft: "10%",
          padding: 0,
          border: '2px solid black'
        }}>
            </div><br></br>
    
       
      <Container justify="center">
      <Row>
    
            <Col>  <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
              {"Roy F Guzmán - Algorithmic and instrumental electronic music composer, improviser and poet born in San Juan, Puerto Rico on June 28, 1987.  His previous and current research topics are chaos theory for musical structural material, the subject of Abstractions worked through sound scores with instruments using them as a metaphor for the perception of all reality, Música a Lo Pobre which includes the theme of resilience, aesthetics that produces the authentic limitations of systems as an abstract universal of folklore, non-duality, the concept of axioms of conceptual and physical objects, abstract geometries in musical forms, the study and formalization of the reading of scores non-traditional, the defiance of the horizontal and vertical paradigms in experimental scores, the expansion of parametrization and musical constructs, the investigation of the concept of Plastic Sound Forms where he creates techniques to produce the illusion of a solid in a temporal medium with the program El Cubo De Chuito for manipulation of audio in 3 dimensions, the creation of conceptual music based on theories about Taina indigenous abstract spirituality, the anthropo logy and cultural dynamics to generate musical material and the development and design of new and traditional indigenous Puerto Rican instruments."}<br></br><br></br>
             
              </p>
              </div>   </Col>
              <Col>  <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              padding: "5%",
              border: '1px solid black'

              }}>
              <p>
              {"Recently he explores the Meta Composition where it is proposed that the perceptual abstraction called reality is affected by object structures, new constructs, forms, symbols and compositional texts.  He created the Multi Semiotic Concrete Poetry where synchronic and asynchronous multi semioticism is explored and the Integral Meta Poetry where semiotic color is explored as an integral of a multisemioticism of a popular universal gestalt. He also investigates and creates deductions and creations on the metaphysics of Latin American ancestral spirituality and its potential axiomatic and abstract development for the creation of new constructs and philosophies that have the potential to alter perceptual reality."}<br></br><br></br>
            
              </p>
              </div>   </Col>
      
      </Row>
      </Container>
      </div>
    </div>               
  );
}
