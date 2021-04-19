import React from "react";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
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
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "/src/components/Grid/GridItem.js";

import image1 from "./LasTresLuces1.jpg";
import image2 from "./LasTresLuces2.jpg";
import image3 from "./LasTresLuces3.jpg";
import image4 from "./LasTresLuces4.jpg";

import image5 from "./AbstraccionesJíbaras1.jpg";
import image6 from "./AbstraccionesJíbaras2.jpg";
import image7 from "./AbstraccionesJíbaras3.jpg";
import image8 from "./AbstraccionesJíbaras4.jpg";
import image9 from "./AbstraccionesJíbaras5.jpg";
import image10 from "./AbstraccionesJíbaras6.jpg";

import image11 from "./PactoTaino1.png";

import image12 from "./Bomba oara orquesta y bailadoras.png";

import image13 from "./ConstructosNuevosDe.jpg"

import image14 from "./ParametrosDELevtura.jpg"

import image15 from "./MA1.jpg"
import image16 from "./MA2.jpg"
import image17 from "./MA3.jpg"
import image18 from "./MA4.png"
import image19 from "./MA5.png"
import image20 from "./MA6.png"
import image21 from "./MA7.png"
import image22 from "./MA8.png"
import image23 from "./MA9.png"
import image24 from "./MA10.png"
import image25 from "./MA11.png"
import image26 from "./MA12.png"
import image27 from "./MA13.png"
import image28 from "./MA14.png"
import image29 from "./MA15.png"
import image30 from "./MA16.png"
import image31 from "./MA17.png"
import image32 from "./MA18.png"
import image33 from "./MA19.png"
import image34 from "./MA20.png"
import image35 from "./MA21.png"




export default function Scores(props) {
    
  return (
    <div style={{ 
        position: "absolute",
        backgroundColor: "white",
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

<div style={{
    margin: "10px",
    padding: "10px"}}>

<Container justify="center">
      <Row>  
        <Col>
        <h3>Abstracciones de Puerto Rico para Cuarteto de Cuerdas</h3>
        <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
        </Col>
         <Col><div style={{ 
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
                {"Carolina Pons, Violín"}<br></br>
                {"Nayomi Lozano, Violín"}<br></br>
                {"Lourdes Naomi, Viola"}<br></br>
                {"Gisela Rosa, Cello"}<br></br>
                {"Roy F Guzmán, Composición"}<br></br><br></br>
                {"Abstracciones de Puerto Rico para Cuarteto de Cuerdas "}<br></br><br></br>
                {"Estas piezas son creadas utilizando un procedimiento de composición propio llamado Abstracciones donde se utilizan partituras sonoras y se abstraen estas partituras interpretadas por instrumentistas. Se busca una abstracción obtenida por la imperfecta emulación del material de la partitura sonora, esto ayuda mediante los errores de emulación a pocas leídas tener una abstracción del material y de esta manera obtener un material nuevo."}<br></br><br></br>
                {"Abstracciones y su concepto:"}<br></br><br></br>
                {"El intento como el material de lo nuevo. La formalización de la imperfección y sus artefactos y errores de intentar emular un material sin llegar a lograrlo perfectamente como procedimiento y estética para llegar a una abstracción del mismo siendo la misma abstracción el símbolo y su “real” a la misma vez."}<br></br><br></br>
                {"El proceso de extraer orbitas de información del partituras sonoras viene siendo la renderisación imperfecta de su totalidad, una abstracción de su totalidad con limites diferenciando la misma abstracción de otras posibles abstracciones de la totalidad del caos."}<br></br><br></br>
                {"Ahora la abstracción se convierte en su real. No en un símbolo de su realidad platónica ya que la abstracción en si misma ya es una cosa nueva y diferente de donde vino, la totalidad no significable."}<br></br><br></br>
                {"Este concepto también tiene su incepción y es inspirado en el saqueo ejercido a Puerto Rico. Esto me inspiró a pensar que el formalizar una imperfección y mantener la estética errónea constante logra una innovación y nueva propuesta estética. Abstracciones es mi forma de lograr esta innovación a partir de una imperfección predeterminada y a propósito de emular un material sonoro en este caso grabaciones de campo de varias areas de San Juan en Puerto Rico."}           
              </p>
              </div>   
              </Col>
          </Row>

          <Row> 
    <Col><div style={{
            border: '1px solid red',

    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image1}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image2}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image3}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image4}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>   


<Row> 
    <Col><div style={{
      marginTop: "10px",
    border: '1px solid red',
    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image5}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image6}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image7}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image8}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image9}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image10}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>   
         
  <Row>
          <Col>
          <iframe style={{paddingTop: "10px", border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe>
          </Col>
          <Col><div style={{ 
            marginTop: "10px",
            paddingTop: "10px",
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

              }}>
              <p>
                {"This is a conceptual art music piece based on ideas and abstractions of aesthetic ranges and an aesthetic multidimensional matrix or space that based on a theory of multisemiotism this lack of elaborated material and emphasis on specific idea results in the acquisition of a huge amount of semiotics and meaning related to it. In this case is based on the concept of discrete points, an elemental object in mathematics that are the atomic particles which creates lines, contours and every single thing that exists in a 3 dimensional plane, perhaps multidimensional planes, axises, time, polarities and any other meaning that periodic and consecutive sound events or points might represent."}<br></br><br></br>
                {"This idea can also be related to the spiritual domain of African decent individuals. This aesthetic is found in Jazz and in some of my thoughts on spirituality regarding certain collectives could be seen as an identity of Afro American spirituality that might or might not be in the awarenesses of these individuals."}<br></br><br></br>
                {"In my researches trying to find my identity in this spiritual abstract space I find myself in awareness of this abstract idea that is part of my Puerto Rican heritage. Fusing these abstract formal knowledge and assumptions or deductions of abstract ancient knowledge related to my heritage, ancient cultures like Pre Colombian civilizations, African civilizations and adding these European analysis I was able to find an object that I feel is in accordance with what I might represent as a Puerto Rican artist."}<br></br>
              </p>
              </div>   
              </Col>
        </Row>
    </Container>
</div>

<Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image11}>
  </img> 
  </Media> 
  </Col>
  </Row>
  </Container>

  <Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image12}>
  </img> 
  </Media> 
  </Col>
  </Row>
  </Container>

  <Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image13}>
  </img> 
  </Media> 
  </Col>
  </Row>
  </Container>

  <Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image14}>
  </img> 
  </Media> 
  </Col>
  </Row>
  </Container>



  <Row> 
    <Col><div style={{
      marginTop: "10px",
    border: '1px solid red',
    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image15}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image16}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image17}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image18}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image19}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image20}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image21}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image22}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image23}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image24}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image25}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image26}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image27}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image28}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image29}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image30}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image31}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image32}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image33}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image34}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image35}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>   

</div>
  );
}
