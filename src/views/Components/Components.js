import React from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';



import image1 from './glitch3.png';
import 'bootstrap/dist/css/bootstrap.css';


class Components extends React.Component{

  render(){
      return(
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
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>

{/* <div style={{ 
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
        
        }}></div> */}
  <Media>

    <img
   width="100%"
   height="100%"
    
   src={image1} ></img> 
  
</Media> 
      

      </div>
      
      )
  }
}

export default Components;

// export default Components;

// export default function Components(props) {

//   return (
    
//      <Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//     </Form>
//     </Navbar>

// <div>  
//       <Container>
//       <Row>
//       <Col>Luigie Vazquez</Col>
//       <Col>    </Col>
   
//       </Row>
//       </Container>
     
     

//   <Media>

//     <img
//     width={960*0.75}
//     height={639*0.75}
    
//     src={image1} ></img> 
//   <Media.Body>
//     <p>
//       Luigie Vazquez es un percusionista, 
//       compositor y educador de Guayama, 
//       Puerto Rico.
//     </p>
//   </Media.Body>
// </Media>
      
//     </div>
//   );
// }
