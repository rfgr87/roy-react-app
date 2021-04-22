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

import image1 from "./glitch5.jpg";


function ElectroAcoustic(props) {
    
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
      border: '1px solid white',
       }}> 
       Electro Acoustic<br></br></h5>
       </div>

      

       <Container justify="center">
       <Row>
         <Col> <div style={{ 
              position: "relative",   
              backgroundColor: "black",
              fontSize: "10px",
              fontFamily: "Menlo",
              color: "white",
              height: "100%",
              borderWidth:1,
              marginTop: "0%",
              width: "100%",
              border: '1px solid white',
              paddingLeft: "2%",
              paddingRigth: "2%",
              paddingTop: "5%"

              }}>
              <p>
              {"sin-título[dd/mm/yy]"}<br></br><br></br>
              {"These worke are part of a series of work named untitled or sin-título[date] were I am focusing on pure abstract forms in sound and music. In these pieces I tend to stand conceptually with the idea that sounds and music are a-symbolic phenomenological substances and that this art of sounds should be perceived with a synthesis of a concrete, primitive, eidetic and experiential consciousness in order to enjoy the pure forms, the tension and release, without the confusion and obstruction of semiotics. Technical and Aesthetic concepts behind these art music sin-títulopieces. Non thematic geometrical abstraction in electroacoustic algorithmuc composition. The proportions are protagonists with a dislocation of continuity given by apparent non associated sound sources that embraces Webern like sound proposition to a more subtle but still obvious structural aesthetics. This is integrated with a more organic morpholigicaly gestural sound complexes that fuses this dry geometrical proportions to this more organic sound events as well as the integration of a musical gesture that incorporates a slight detachment from a repetitive minimalism. In resume this sin-título pieces navigates in slight development of the edges of electro-acoustic and contemporary musical abstract aesthetic propositions following weberian musical thougth with a thru composed structural aesthetic that focus on a slight detachment of constant movement and evolution without staying in long padded episodes."}<br></br><br></br>
              </p>
              </div></Col>
              
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=382117328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-10-21-2">sin-título[02-10-21] by Roy F Guzmán</a></iframe>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3924403652/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-17-21-2">sin-título[02-17-21][2] by Roy F Guzmán</a></iframe>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4106805977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-19-03-21-1">sin-título[19-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2215956715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-19-03-21-2">sin-título[19-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2992527658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-19-03-21-3">sin-título[19-03-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3294850889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-19-03-21-4">sin-título[19-03-21][4] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2239288180/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-17-21-1">sin-título[02-17-21][1] by Roy F Guzmán</a></iframe>  
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=193009962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-18-21-1">sin-título[02-18-21][1] by Roy F Guzmán</a></iframe>
        </Col> 
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1711483364/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-18-21-2-2">sin-título[02-18-21][2] by Roy F Guzmán</a></iframe>       
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3695031801/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-19-21-2">sin-título[02-19-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1869122664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-19-21-1">sin-título[02-19-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=346865073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-20-21-2">sin-título[02-20-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3558845635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-20-21-1">sin-título[02-20-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1112221311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-21-21-2">sin-título[02-21-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3156783174/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-21-21-1-2">sin-título[02-21-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>   


        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3802095213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-22-21-2">sin-título[02-22-21][2] by Roy F Guzmán</a></iframe> 
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1237402150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-02-22-21-1">sin-título[02-22-21][1] by Roy F Guzmán</a></iframe> 
        </Col>
        </Row>  

        <Row>
         <Col> <div style={{ 
              position: "relative",   
              backgroundColor: "black",
              fontSize: "10px",
              fontFamily: "Menlo",
              color: "white",
              height: "100%",
              borderWidth:1,
              marginTop: "0%",
              width: "100%",
              border: '1px solid white',
              paddingLeft: "2%",
              paddingRigth: "2%",
              paddingTop: "6%"
              }}>
              <p>
              {"[criollo-yu] [criollo-yu-ita] [criollo-ita]"}<br></br><br></br>
              {"These criollo-yu, criollo-ita and criollo-yu-ita works are based on a sound arquetipe aesthetic of a white criollo from Puerto Rico."}<br></br><br></br>
              </p>
              </div></Col>
              
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=805728789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-26-01-21">criollo-yu[26-01-21] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=524606526/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-25-01-21-1">criollo-yu[25-01-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1180833681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-25-01-21-2">criollo-yu[25-01-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2991163448/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-23-21-1">criollo-yu[02-23-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1261462523/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-23-21-2">criollo-yu[02-23-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2717334570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-23-21-3-2">criollo-yu[02-23-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=219896302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-24-21-1">criollo-yu[02-24-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2587528583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-24-21-2">criollo-yu[02-24-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=794949628/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-02-24-21-3">criollo-yu[02-24-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>


        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1109052108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-12-03-21-1">criollo-yu[12-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=800196207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-13-03-21-2">sin-título[13-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1778066505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-12-03-21-2">criollo-yu[12-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=54652033/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-13-03-21-1">sin-título[13-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>
        
        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2018164060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-14-03-21-2">criollo-yu[14-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3328989089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-14-03-21-1">criollo-yu[14-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=478812164/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-25-03-21-1">criollo-yu-ita[25-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1886331326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-25-03-21-2">criollo-yu-ita[25-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2378880430/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-25-03-21-3">criollo-yu-ita[25-03-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2667387728/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-ita-26-03-21-1">criollo-ita[26-03-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1343620929/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-ita-26-03-21-2">criollo-ita[26-03-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3532057012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-ita-26-03-21-3">criollo-ita[26-03-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=136009491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-1">criollo-yu-ita[05-04-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=12937101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-2">criollo-yu-ita[05-04-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>     
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1971791918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-3">criollo-yu-ita[05-04-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3887036237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-4">criollo-yu-ita[05-04-21][4] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>    
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3887036237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-4">criollo-yu-ita[05-04-21][4] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2000207932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-5">criollo-yu-ita[05-04-21][5] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1061591111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-ita-05-04-21-6">criollo-yu-ita[05-04-21][6] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=805728789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/criollo-yu-26-01-21">criollo-yu[26-01-21] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>


        <Row>
         <Col> <div style={{ 
              position: "relative",   
              backgroundColor: "black",
              fontSize: "10px",
              fontFamily: "Menlo",
              color: "white",
              height: "100%",
              borderWidth:1,
              marginTop: "0%",
              width: "100%",
              border: '1px solid white',
              paddingLeft: "2%",
              paddingRigth: "2%",
              paddingTop: "6%"
              }}>
              <p>
              {"salsa[dd/mm/yy]"}<br></br><br></br>
              {"These pieces are based on salsa sounds. Some are based on an abstraction of the mambo were a fast ongoing energy is always exercised and others are more abstract and structurally contrasting."}<br></br><br></br>
              </p>
              </div></Col>
              
        
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1181326296/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-25-21-1">salsa[02-25-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2156520661/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-24-21-2">salsa[02-24-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1907142716/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-24-21-3">salsa[02-24-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3309105421/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-27-21-1">salsa[02-27-21][1] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>

        <Row>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2037385952/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-27-21-2">salsa[02-27-21][2] by Roy F Guzmán</a></iframe>
        </Col>
        <Col>
        <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4118436277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/salsa-02-27-21-3">salsa[02-27-21][3] by Roy F Guzmán</a></iframe>
        </Col>
        </Row>


    </Container>
    </div>
    )
}

  export default ElectroAcoustic
