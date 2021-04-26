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

import image1 from "./1+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image2 from "./2+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image3 from "./3+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image4 from "./4+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image5 from "./5+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image6 from "./6+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";
import image7 from "./7+-+Estrategias+para+desafiar+las+convenciones+de+la+horizontal+y+verticalidad+de+partituras+gráficas.jpg";


export default function Texts(props) {
    
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
        <NavDropdown.Item href="texts">Texts</NavDropdown.Item>



      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>
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
</Carousel>     
</div>
</Col>
</Row>   


<Row>  
    
    <Col>
    <h3>Minimalismo Maximalista – Roy F Guzman 2020</h3>
    <div style={{ 
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
        padding: "5%"}}>
        <p>
            {"Una de las caracteristicas de esta propuesta estética es que tiene cualidades de ambos conceptos: maximalismo y minimalismo. Me parece que en mis composiciones en particular se a creado una especie de comproimiso entre ambos conceptos."}<br></br><br></br>
            {"Uno de los elementos notables en este fenómeno de mis obras se basa en obtener un oide o escucha minimalista donde se adquiere una apreciación por una macroscopidad del material. Esto se asemeja a la escucha de segundo orden de Xenakis en relación a las nubes de granulaciones de sonidos donde se aprecian nuevos constructos musicales o materiales musicales como densidades, continuidades, morfologias cambiantes en ves de simplemente notas, duraciones y amplitudes."}<br></br><br></br>
            {"Entonces en este minimalismo se aprecia una solidificación, un color, una integracióm basada en una forma de componer que otorga la escucha tener unr resumen de una complejidad bastante amplia pero con o la duración suficiente para lograr escuchar todas las dinámicas de la música y contemplar la permutación amplia de estos colored de ese dinamismo musical o simplemente un nivel de complejidad tan amplio y vasto que obtenga una continuidad y un color dinámico mas constante o una complejidad mas simple siendo evidentemente una complejidad y no in minimalismo y esta complejidad exponiendo el promedio de su color."}<br></br><br></br>
            {"En algunas obras mias como sin-título[10-21-20] y sin-título[10-9-20] trabajé con intentar expandir mi voacbulario de gestos musicales de manera que sean abundantes, cambiantes y siempre generando un material de interes obvio a la escucha, quiere decir un material que constantemente en tiempos de 0.5 segundos a 5 segundos aproximadamente mantengan un interes del escucha por medio de sensasionalismos onoros gestuales obvios o dinamisidades lo suficientmente agradables a las convenciones de gustos del oyente general que se deja conmover por eventos sonoros emocionantes."}<br></br><br></br>
            {"Esta estética consistente de emoción constante debida al dinamismo mesoscópico se puede apreciar en esa monotono-dinamismo serial de Boulez y Stockhausen entre otros pocos donde se compone de manera que las melodias y morfologias creadas por la complejidad serial y los contrapuntos logran gestos musicales que siempre estan en constante cambio y otorgan placer inmediato debido a una novedad de material creado por las mismas técnicas seriales y por la desición de utilizar este rango mesoscópico que mantiene siempre interes al oyente que logra entender estas estructuras que yo considero un minimalismo-maximalista bastante extremo. El rango de gestos mesosocópicos viene siendo aproximadamente de 0.25 segundo a 3-5 segundos de un evento musical, despues de este periodo de tiempo hay un cambio evidente de la mrofologia compleja del gesto musical de ese momento mas o menos."}<br></br><br></br>
            {"Entonces esta idea que muchas veces no es tan apreciada por el mero hecho de tener una estética que algunas personas pudieran considerar monotonas por la entropia alta de su contenido sonoro-musical pues decidí explorar y lograr esta estética en mis obras mencionadas anteriormente y en casi todas mis obras pero cada una explorando diferentes rangos de no solo lo deducido e Boulez y Stockhausen pero unas elaboraciones y expansiones de este rango que llamé minimalismo-maximalista."}<br></br><br></br>
            {"Este fenómeno interesante resultante de mi proceso composicional y oído también puede ser un resultado de una técnica conceptual de innovación que se basa en abrazar un rango de menor abundancia en relación a abundancia completa que viene siendo maximalista no minimalista. Esta técnicas se basan en una deducción y elaoración observada en la poesía de Clemente Soto Beles donde el formaliza un error gramatical folclórico como propuesta estética y constante. La diminuta alteración a la perfección de la lengua y aceptación de este error logra una proposición estética innovadora por su consistencia y deja la puerta abierta para explorar los otros rangos de alteración de la perfección o una imperfección a un rango en especifico desde lo sutil como Klemente hasta lo totalmente entrópico como lo fuera mi poesía concreta multi semiótica que es una abundancia de entropía altísima en relación a la sintaxis, los caracteres, números y complejidades textuales usadas."}<br></br><br></br>
            {"En relación a este procedimiento de innovación estética basada en formalizar un error o rango de imperfección o sencillamente rango de posibilidades y alternativas seleccionadas para la exploración basada en una limitación pues se observa en mi obra la utilización de el color del promedio de las dinámicas musicales que son resultado de la larga duración de las obras y la repetición de dinámicas de los algoritmos siendo estos desde los mas sencillos y simples hasta los mas complejos y de esta manera se adquiere esta nueva escucha de colores y integrales dinámicas."}<br></br><br></br>
            </p>
            </div>   
            </Col>
        </Row>

    <Row>      
        <Col>
        <h3>Estructuras Geométricas y Geometrias Multidimensionales</h3>

        <div style={{ 
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
            padding: "5%"}}>
            <p>
            {"Las estructuras geometricas para explicarlas mejor se basan en una busqueda de estéticas nuevas basadas en su contenido formal mas explicito. Por eso la forma tiende a ser un parametro muy bueno a utilizar. Las geometrias en relacion a la forma tiende a ser explicita y notable y de esta manera se pueden lograr crear nuevas estructuras basadas en proporciones o geometrias."}<br></br><br></br>
            {"Dos buenos ejemplos de esto serian la serie de sin-título[10-4-20] – [1], [2] y [3] y sin-título[10-10-20]. Estas obras tienen explicitamente una forma explicitamente resaltando unas proporciones, unas geometrias."}<br></br><br></br>
            {"Este pensamiento de lograr un analogo entre lo geometrico quizas mayormente visual con lo sonoro o musical fue inspirado por pensamientos de Morton Feldman y su interes por las artes visuales de su tiempo y por las alfombras coptas. Su exploración en crear analogos en su musica e incluso crear una estética visual o mejordicho geomtetrica puramente sonora fue bien efectiva y en muchos casos no se pudiera relacionar tanto una conección con lo visual a parte de su minimalismo elegido como los contemporáneos de las artes visuales de esos tiempos, sus exploraciones rítmicas proporcionale, y su contenido harmónico. Digo esto para enfatizar en que los analogos hechos de lo visual a lo sonoro si se evaluan realmente son metaforas bien lejanas y se tiene que asumir y tomar ciertas cosas como analogas cuando no lo son. Como quiera menciono este compositor porque su proceso creativo es uno de los mas efectivos de la historia en cuanto a crear una innovación basada en un minimalismo maximalista inspirada en esa constancia de las artes plásticas del expresionismo abstracto. El logró una innovación de las mas importantes en la historia de la música y es un buen ejemplo a seguir en la exploración de las nuevas estructuras y propuestas estéticas sonoras."}<br></br><br></br>
            {"En cuanto a mis obras sin-título[10-4-20] se basa en una de las propuestas geométricas principales y mas fundamentales del rango de las estéticas geometricas. Este rango o espacio de estas geometrias para explicarlo mejor es un concepto que me gusta considerar mucho y se basa en que cada geometria o estructura tiene un rango o area selecta en ese espacio. Usualmente me gusta visualirzar estos areas con aproximaciones o generalisaciones, mejor dicho solidificaciones sobre todo el contenido geometrico de una pieza. Se pudiera hacer referencia a algo que le llamo static holistic imprint o huella holistica estática que viene siendo una de las formas que describo de como leer una obra visual o partitura visual. Se basa en la epxeriencia inmediata de adquirir todas las proporciones, distancias y diferencias de los elementos de una obra visual o partitura visual con el primer encuentro de la obra. Esta inmediatez se puediera hacer un analogo con el area estética que habita una obra musical en este espacio estético. Por ejemplo mi obra sin-título[10-4-20] habita y monopoliza un area estética donde las pulsaciones y la constancia de ese pulso son un tema principal. La no elaboración de material musical y dejar solo esos pulsos de diferentes velocidades crea una tendencia a pensar en lo cocneptual y no tener desviaciones aurales mayores que puedan desenfocar la intención de la pureza conceptual estética. Aquí se habla de música conceptual mayormente que busca monopolizar un area del espacio estético fundamental. Esta área pudiera verse como una de las cosas prinicpales para la creación, para la unificación, para las cosas fundamentales de las cuales se basa toda la existencia mas o menos que viene siendo el pulso, la periodicidad, la frecuencia o los puntos elementales que al unificarse o infinitamente posicionarse aledañamente crea las lineas, figuras y contornos de todo incluyendo todas las dimenciones si se considera el material fenomenológico como una materia, unidad o complejo sentiente como lo único perceptible ante los seres o existencias sentientes."}<br></br><br></br>     
            {"Estos pulsos toman el cimiento matemático de la discretisación de la realidad meidante elementos atómicos. Lo diferencial o continuo como aveces se considera la materia en un aspecto macroscópico queda como metafórico en este plantiamiento conceptual pero no deja de ser una metáfora o constructo metafísico válido para la exploración ilimitada de la multidimensionalidad o multiplicidad conceptual etérea o metafísica."}<br></br><br></br>    
            {"Aquí podemos considerar el artefácto perceptual de lo constante como la frecuencia, la nota musical o lo constante unificado, concepto expresado en la musica constante como la de La Monte Young, musica “Drone” o cualquier estética constante sin espacios. Esto forma otra área conceptual mas macroscópica y menos científica, mejor dicho subjetiva y poética sobre la realidad mayormente sin considerar el atomismo o infinitesimalidad en todo incluyendo lo físico, lo real y lo metafísico."}<br></br><br></br>     
            {"Todas estas elaboraciones se consideran en cuanto a la selección de geomtrías simples o quizas absolutas. Para dejarme entender esta simplesa adquiere una universalidad que incluye una totalidad de su contenido discreto integrado a un concepto. Mientras mas elaborado sea la geometria mayor discretisación e individualidad pero esta a la merced de la simplesa que incluye esta elaboración discreta en su totalidad como lo es la palabra simple “Todo” o totalidad."}<br></br><br></br>      
            {"Las piezas sin-título[10-10-20] son cuatro obras que son inspiradas por las proporciones simples grandes de Mark Rothko. Aquí sencillamente se explora estas proporciones que no son mas de 4 segmentos aproximadamente en el contenido de la totalidad de la obra. Para elaborar en la significancia de estas geometrias pudieramos considerar que incluye estos numeros de 1 a 10 aproximadamente usualmente con proporciones pares y extremas. Lo minimo a lo máximo y las proporciones aproximadamente pares."}<br></br><br></br>     
            {"Que pudiera significar esto en un aspecto mulitple fundamental metafísico?"}<br></br><br></br>
            {"Ya que su contenido es mas elaborado que los conceptos fundamentales pero sigue siendo suficientemente fundamental pudieramos deducir o teorizar que se basa sencillamente en una abstracción, en una ficción, en una creación que pudiera considerarse relacionada a segmentos grandes visuales como lo es el cielo en contraste con la tierra o elementos naturales perceptiblemente cuadrados o rectangulares. Lo mas evidente en este caso es el contraste del cielo y la tierra. Este contenido visual puede ser la monopolisación semiotica holística de esta abstracción de estas figuras, de estas geometrias o proporciones mejor dicho."}<br></br><br></br>
            {"Esto se puede considerar uno de los rangos mas fundamentales de la percepción de la realidad pero sigue siendo debajo de lo absoluto del todo, la unidad o el atomismo y sobre la elaboración mas compleja de la realidad diferencial o discreta desde este punto abstracto o estético."}<br></br><br></br>
            {"En mis obras se exploran dos versiones de intentar crear analogos de estas obras de Rothko a la música. Es bastante diferente los campos ya que son diferentes campos y parametros los que se contienen pero por ejemplo la complejidad sonora de una señal compuesta por varias a la simplesa sonora de una señal compuesta por una sola ya crea un contraste abrupto y relevante. Los cambios de frecuencias o rangos de frecuencias de un segmento a otro crea otro contraste o color y por último las dinámicas o volumenes de las secciones tambien crean otro contraste o color que multiplica la dimensionalidad de el contenido abstracto en lo sonoro o musical."}<br></br><br></br>      
            {"Si elaboramos sobre Rothko pudieramos apreciar la crudeza y artesania, o lo no absolutoo abstracto de su trazo humano. Esto crea una dimensionalidad que lleva la obra visual a rangos mas humanos o terrenales. Esto no se considera en mi obra pero es un material bien interesante investigar."}<br></br><br></br>
            {"Este tipo de contemplación de estos rangos geometricos, estéticos o absolutos, quizas universales considero un buen ejercicio para lograr originalidad, quizas mejordicho descubrimiento de geometrias autenticas que tengan su área en el espacio de la abstracción geométrica y quizas universal si se logra encontrar unos rangos no monopolizados."}<br></br><br></br> 
            {"Como solución para estos tiempos despues de la exploracion modernista de los 1900 y un poco antes de este siglo se pudiera otra vez considerar las estrategias minimalistas de Morton Feldman. Un minimalismo infinitesimal maximalista donde se exploran todas las posibles permutaciones de los multiples parámetros inidvidualemente, unificados y/o no polarizados del material seleccionado a explorar ya sea visual, musical o de cualquier otro area artística."}<br></br><br></br> 
            {"Esto lograra una autenticidad, un sistema autentico o el resultado que yo observo en sistemas folcloricos que obtienen su autenticidad por las limitaciones y elaboraciones de este material dentro de sus limites."}<br></br><br></br> 
            {"Para seguir elaborando un poco mas en este tópico que me parece bien interesante podemos apreciar los diferentes niveles de integración o observación de el material. Iannis Xenakis mientras elaboraba sus observaciones trabajando con la granulación y las nubes de sonidos producidos por la complejidad de esta técnica describió lo que el llama La Escucha a Segundo Nivel. Yo le llamo integraciones, observaciones de la complejidad. En el caso de Xenakis el observa un desarrollo orgánico diferencial de su contenido composicional y sonoro. En el caso de mis elaboraciones sobre este tema yo describo una integración mas abrupta y menos orgánica discretizando segmentos contrastantes que definen secciones."}<br></br><br></br> 
            {"Integraciones y Multidimensionalidad"}<br></br><br></br> 
            {"Estas integraciones se pueden considerar colore conceptuales o abstractos de contenido seleccionado para el analisis de esa integración. Por ejemplo se pueden considerar la integracion de solamente tres parametros como timbre, evento musical en relacion a las notas ya sean escalas o arpegios y dinamicas. Estos tres parametros se pueden analizar e integrar para observar un constructo integrado de estos tres parametros. Esto se puede considerar para el analizis y creacion de geometrias multidimensionales integradas. Cada selección de parametros para la integración crea otra dimensión que al explorarse crea un complejo geometrico abstracto en este campo metafiísco de estos constructos de analisis o estéticos. Un arte metafísico que puede ayudar a la apreciación mas profunda de la obra o simplemente ser un arte de la observación."}<br></br><br></br>    
            {"Hay un tema que me interesa mucho tambien sobre este mismo campo que es el del movimiento o el constructo de el cambio como sólido o estético. En este campo se puede considerar la no polaridad ya que la realidad de la observación conlleva la apreciación del cambio o union de un complejo a otro complejo o unidad individual sea como se considere, ya sea una cosa o un complejo. Esta no polaridad o no dualidad es inspirada un el logocentrismo de Derrida y pensamientos de Deleuze la cultura Queer y algunas otras cosas relacionadas a esta no dualidad."}<br></br><br></br> 
            {"Para ser mas especificos y volver a el tema de la apreciación diferencial del cambio se considera observar la union y cambio diferencial de la sintesis de diferentes parametros en uno o en muchos discretos. Esta elaboración de observación del material se puede considerar tambien pero me parece que es demasiado amplio y holísitco al igual que relativo como para obtener un absoluto ya que se considera el todo y discretisaciones de una totalidad, unidad dentro del todo. No obtiene tanta validez mas que la de su existencia misma."}<br></br><br></br> 
            {"La única manera que pudiera obtener un valor auténtico es si se limita este contenido cambiante a unas variables especificas de manera que se puediera apreciar el color y no obtener la cegadez de la totalidad no diferencial o la devalorisación de un maximalismo no controlado o limitado, un efecto visto en la sobre exposición o abrumación de todo contendio en estos tiempos post modernistas."}<br></br><br></br> 
            {"La limitación es un factor importantisimo para la valorisación de todo."}<br></br><br></br> 
            {"Es bien interesante considerar los pensamientos de Heinrich Schenker en esta propuesta de observación y analisis. El tema que mas me interesa sobre Schenker es su analisis y discretisación de niveles estructurales desde lo microscópico a lo macroscópico y como se logran temas, quizas incluso melodías en cada rango estructural. Se pudiera elaborar hasta la observación de navegar entre los diferentes rangos estructurales y apreciar nuevos temas que se producieran con este nuevo arte de la observación basados en estos pensadores y teóricos pero viene siendo un arte diferente mas que un analizis, una creación de relaciones, de material nuevo."}<br></br><br></br> 
            {"Para volver al tema principal que me interesa pues la correlación que hace Schenker en cuanto al analisis estructural de los rangos de las melodias, de los intervalos grandes produciendo multidimensionalidad temática de una manera macroscópica. El considera la observación lineal de si no me quivoco hasta intervalos de terceras y mayor que esto ya logran un efecto multidimensional y macroscópico. Notas en un rango espectral especifico separados por intervalos grandes partiendo de otro rango crea correlación con notas en estos mismo rangos. Anton Webern fue uno de los pioneros en romper esta linearidad o correlación perceptual temática creando un sonido casi homogéneo en toda su obra puntillista por no tener mejor descripción para esto."}<br></br><br></br> 
            {"Teniendo a Anton Webern como antagonista y extremo de lo discreto y diferencial pues podemos lograr observaciones dentro del rango que deja la musica clásica y romántica analizada por Schenker y el rango homogéneo maximalista de alta entropía de Webern."}<br></br><br></br> 
            {"Dentro de estos rangos podemos disfrutar de una infinita posibilidad de apreciaciones y correlaciones ya sean temáticas o abstractas."}<br></br><br></br> 
            {"En el campo de la música y dejando atrás la estética de cambio continuo diferencial podemos lograr una segmentación Schenkeriana que logra multiplicidad, multidimensionalidad que engrandece la obra a niveles multidimensionales y mas absolutos, contundentes y quizas mas universales. Este ultimo plantiamiento sobre universalidad es debatible ya que se pudieran crear cualquier tipo de estética basada en cualquier tipo de observacion, limitación de contenido o variables a considerar entre otras cosas."}<br></br><br></br> 
            {"Pero para seguir en el campo multidimensional segmentado y unido a la msima vez podemos considerar el posicionamiento de elementos basados en teorias Schenkerianas sobre las distancias intervalicas o en el espectro correlacionados a distancias relevantes de un constructo, parámtro, unidad o complejo a otro nivel del mismo constructo, parámetro, unidad o complejo."}<br></br><br></br> 
            {"Es necesario la discretisación de estas observaciones por ejemplo considerar la integración de paramtetros como timbre y ritmo como una integración especifica y observar los cambios de este integral en la obra y de aquí aplicar las teorizas Schenkerianas para lograr multidimensionalidad quizas mejor dicho multi temátcias dentro de esta integral."}<br></br><br></br> 
            {"La integral como bien he dicho anteriormente pueden ser parametros como ritmos y cambios estructurales unificados en una integral y de aquí se logran otras aproximaciones o numeros basados en integrales de estas ventanas de analisis en cada región de la obra. Esta integral es una de las mas complejas ya que considera un concepto mas amplio como la union de muchas cosas como lo es la palabra sencilla “cambio” que conlleva ritmos, frecuencias, timbres o cualquier parametro, constructo o cosa que se considere como parte de la unidad llamada cambio."}<br></br><br></br> 
            {"Lo importante aquí es apreciar la multidimensionaldiad, la multi tematica y las estructuras macroscópicas que nos dejó Henreich Schenker."}<br></br><br></br> 
            {"La instrumentcaión, el color de los instrumentos, los eventos musicales etc."}<br></br><br></br> 
            </p>
              </div>   
              </Col>
          </Row>


          <Row>      
        <Col>
        <h3>Cimientos de mis propuestas filosóficas de creación de conocimiento encontrados en A Thesis on ______. Roy F Guzmán</h3>

        <div style={{ 
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
            padding: "5%"}}>
            <p>
            {"Validación, elaboración y contemplación de sabiduria del genio colectivo folklórico en referencia a tres refranes Puertorriqueños:"}<br></br><br></br>
            {"1) - No es lo mismo ni se escribe igual"}<br></br><br></br>
            {"2) - Buscar las cinco patas al gato"}<br></br><br></br>
            {"3) - No busques que encuentras"}<br></br><br></br>     
            {"No es lo mismo ni se escribe igual se desarolla en A Thesis on _____ . de manera que una investigación incisiva de una palabra que pudiera ser sinónimo de otra como luz o imagen, visual contiene un contenido diferente por ende es completamente diferente a su referencia o sinónimo."}<br></br><br></br>    
            {"Esto lleva a validar cualquier creación conceptual que sea parecida a otra. Por ejemplo Música Visual y Música de Imagem son bien similares los conceptos pero cada una tiene su valor y significado distinctivo a tales extremos también etimológicos."}<br></br><br></br>     
            {"Buscar las cinco patas al gato en A Thesis on ______ . es utilizado para lograr encontrar en el vacio conceptual, lo que yo le llamo lo no significable a partir de decorrelaciones lógicas creando vacio de contenido lógico y imposibilidades elaborades en La Lógica De La Otredad, conceptos nuevos basados en una sintaxis de partida, en una intención de búsqueda que tiene contenido de base por ejemplo buscar las cinco patas al gato es buscar unos objetos, unos materiales que son una patas, entonces tus constructos intelectuales van a estar guiados a buscar unas patas y no unos jocicos y de esta manera se elabora un contorno que va creando un nuevo contenido que viene siendo las cinco patas del gato. Esto en mi tesis, como ya expliqué, es la base para la creación y búsqueda de nuevos conocimientos y conceptos."}<br></br><br></br>      
            {"No busques que encuentras también esta ligado a lo mencionado en el parrafo anterior pero en este caso dando el enunciado y el establecimiento de una verdad que detemrina que si buscas vas a encontrar lo que estas buscando. Esto le da fortaleza a la búsqueda de las cinco patas del gato o el concepto nuevo, objeto etc."}<br></br><br></br>     
            
            {"La Lógica De La Otredad"}<br></br><br></br>
            {"https://www.dropbox.com/s/0gfrcik70p2f8vo/La%20Lógica%20de%20la%20Otredad%20-%20Español.pdf?dl=0&fbclid=IwAR1SJZButzizTgzY_lPnugGplR-wdLfrRVzR5RrsZN2KoRc-G6i9y0omt0U"}<br></br><br></br>
            {"A Thesis On _____."}<br></br><br></br>
            {"https://www.dropbox.com/s/skcy5he7l0wn1on/A%20Thesis%20on%20______%20Edited.%20copy.pdf?dl=0"}<br></br><br></br>           
            {"Lamentablemente y afortunadamente esta tesis fue hecha bajo alucinaciones psicóticas, mejor dicho en contacto con la metafísica y el ámbito espiritual que me abacoraba allá en el 2015. Perdonen el desorden, los planteamientos descabellados y quizás alguna que otra cosa extraña. Afortunadamente tiene el contenido aquí mencionado por algún lado."}<br></br><br></br>
            </p>
              </div>   
              </Col>
          </Row>

          <Row>      
        <Col>
        <h3>LA LÓGICA DE LA OTREDAD</h3>

        <div style={{ 
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
            padding: "5%"}}>
            <p>
            {"La Lógica de la Otredad – “A Thesis on _____” 2015 – Roy F Guzmán"}<br></br><br></br>
            {"Este concepto, quizas proceso o formula para la creación o extracción de contenido nuevo se basa y descansa sobre una idea de acepación de todo. En otras palabras la validación de todo como posible, quizas un tipo de positivismo usando esta palabra de una forma mas popular y no académica, me refiero a no relacionarlo con el positivismo austriaco empirista y usar la palabra positivista de una manera mas general y popular que en este caso se refiriera a una acpetación de todo como valioso, valido o con contenido que lo justifica ya sea por creación, descubrimiento, extracción o cualquiera de estas juntas."}<br></br><br></br>
            {"Se basa en que todo concepto, incluso un poco mas descabellado, que todo es posible y tiene justificación. Se ata a una teoría que viene de unas observaciones que hice sobre las matemáticas, la física, la metafísica y el arte incluyendo la poesía que contiene contenido metafísico uusualmente."}<br></br><br></br>   
            {"Las teorias de creación en A Thesis on _____ tiene tres pasos."}<br></br><br></br>      
            {" 1 – Reconocimiento de un material de donde expandir la realidad"}<br></br><br></br>       
            {"Tener un material de donde basarse o relacionar algo. En mi caso es lo no significable, en el caso de San Juan Bautista y sus definiciones de dios es basado en el Logos, en el caso de el numero imaginario es basado en un problema imposible sobre polynomios en el campo negativo y sus raizes en otras palabras como existe una función polinomial en un rango de numeros negativos que le da justificacion a una raiz de la misma función para que exista, en el caso de unas de mis deducciones de Einstein viene siendo basado en este extracto de este comentario:"}<br></br><br></br>         
            {"“... space in pre-scientific thought. There are two ways of regarding concepts, both, which are indispensible in understanding. The first is that of logical analysis. It answers the question. How concepts and judgment depend on each other? But this certainty is purchased at the price of emptiness of content. Concepts can only acquire content when they are connected, however indirectly, with sensibilities”" + "- Albert Einstein"}<br></br><br></br>        
            {"Basandome en este comentario dedusco o asumo que el contenido es vacio y solo depende de relaciones que se creen entre ellos. Esto en las teorias de creación yo pudiera decir que la creación de conceptos se basa en “vacio” como contenido principal"}<br></br><br></br>     
            
            {"2 – Verbalisación-Adjetivisación"}<br></br><br></br>
            
            
            {"El segundo paso seria en mi caso una adjetivisación, una metaforisación, darle caracteristicas y contenido a aquella substancia que se genera de lo no significable usando técnicas de La Lógica de La Otredad explicada mas adelante. Para elaborar un poco mas pues se requiere una no sognificabilidad, una imposibilidad o contenido vacio no existente en los constructos actuales. Por ejemplo como seria una honda sincrónica donde la honda requiere de desplasamiento en akgunos casos tiempo para desarollarse y el concepto de sincrónica rompiendo este concepto de lo temporal en la honda. Aquí se crea una no significabilidad con mucho potencial a ser desarollada y estudiada para su creación o descripción o las dos sincrónicamente. Para exponer otros casos similares en la historia pues el numero imaginario le asignan cualidades que no necesariamente sean una realidad lógica numérica. Se le asigna unas cualidades y basadas en esto se generan dinámicas y procedimientos matemáitocs. En referencia a Einstein se asemeja a mi forma de elabora contenido desde una no significabilidad pero en este caso creando realciones entre cosas, atandolo a otros conceptos. En el caso de algunos estudiosos de la lingüística que escojo arbitrariamente para demostrar este procesos que creo que es una técnica mas o menos conocida pues los Formalistas Rusos. Tienen un poema y desean analizarlo sabiendo la relatividad de su contenido semiótico. Basado en esto desarollan analizis morfológicos, sonoros, rítmicos entre un montón de constructos elaborados creando asi un analizis probablemente subjetivo y algo no subjetivo basado en un material. En otras palabras este segundo paso se refiere a desarollar algo basado en otra cosa. Desarollar un constructo en algunos casos que logre expandir ese area de conocimiento, Crear relaciones, caracteristicas, adjetivisar ese contenido nuevo o constructo nuevo y al menos en la metafísica crearlo. En el caso de la fisica cuantica pues ya generan y descubren en mi opinión material de esta fisicalidad determinista."}<br></br><br></br>
            
            {"3 – Reconocimiento y validación de este material"}<br></br><br></br>
            
            {"En este paso pues obtiene el contenido sencillamente. Se reconoce el nuevo constructo. Se experimenta la nueva información de la fisicalidad en le caso de la fisica cuántica. Se experimenta estos nuevos objetos metafísicos en la metafísica del creador. Se reconoce el numero imaginario como un constructo formalizado y util y se usa para diferentes cosas. Se adquiere el analizis de un poema en el caso de los Formalistas Rusos. Se obtiene un material activo en el caso de la creación de constructos a base de relaciones y el vacio como lo mencionado de Einstein. En algunos casos de las matemáticas de valida en los circulos académicos y se usa de cimiento para nuevos desarollos conceptuales y útiles entre otras cosas."}<br></br><br></br>           
            
            {"La Lógica de La Otredad"}<br></br><br></br>
            
            {"La Lógica de La Otredad es una formula, un procedimiento que su objetivo es lograr algun tipo de no significabilidad mediante decorrelaciones de objetos, constructos y/o cosas a sintetizarse. El uso de la decorrelacion es para lograr un vacio conceptual en el cual no haya nada escrito sobre ese tema en especifico. Donde se logre una novedad real mediante ese vacio conceptual en algunos casos extremos de decorrelaciones exageradas pues posibilidades imposibles, verdades basadas en plantiamientos ilógicos basados en la total aceptación de todo o este positivismo popular quizas incluso humilde basado en un plantiamiento pre socrático refiriendome a una primitividad del conocimiento en donde el pensamiento esta virgen de constructos elaborados y abstracciones elaboradas y uno pueda manipular la percepcion al menos y en casos mas relevantes y significativos pues la realidad misma basandonos en un plantiamiento filosófico medio Fenomenológico y Pre Socrático donde plantiamientos libres basados en los limites de la informacion de la realidad filtrada por los sentidos puros se proponen."}<br></br><br></br>

            {"En esta Lógica de La Otredad también abraza la irracionalidad poética y la justifica haciendola determinista y no dejandola como mera estética vaga como lo es la mediocridad descriptiva de la palabra Absurdismo en el caso de Samuel Beckett. Pues se propone ser incisivo y determinante, meticuloso y investigativo para lograr encontrar verdades de este tipo de sintaxis ilógicas. Propongo investigar la adjudicación de diferentes funcionalidades gramáticas a palabras, prefijos, artículos entre otros elementos gramaticales que no tengan esta funcionalidad apropiandonos del contenido semiótico determinista de este analizis y no dejandonos en la mediocridad estética de algunos poetas. Pues por ejemplo el hacer un verbo de un articulo como “de”. Nominalizar un verbo como “correr” como sujeto hacer un predicado como sujeto y lograr encontrar verdades y elaboraciones basadas en estas sintaxiss erroneas en este caso de estos procedimiento plasmados en esta Lógica de La Otredad que abraza con un positivismo popular estas posibilidades que en algunos casos pudiera ser múltiple en definición."}<br></br><br></br>

            {"También esta lo que le llamo “preguntas direccionales” en ingles “pointer questions” donde se emplea las 6 palabras elementales de preguntas como: Que, Cuando, Como, Quien, Donde y Porque a elementos gramaticales, palabras entre otras cosas. Por ejemplo Que Cuando? O Cuando Que? este último no obteniendo tanta otredad por su contenido ser un poco mas normal. Pero Porque Que? viene siendo interesante saliendose un poco de la lógica. En casos mas elaborados pudieramos tener el ejemplo de Como Cuando Que?"}<br></br><br></br>

            {"También se abraza las sintaxis ilógicas y la libre adjudicación funcional a diferentes elementos gramaticales que no tienen estas funcionalidades por su definición por ejemplo."}<br></br><br></br>


            {"Corre arbol de. Esta oración pudieramos elaborarla y analizarla de varias maneras."}<br></br><br></br>


            {"Corre – Sujeto"}<br></br><br></br>
            {"Arbol – Verbo, Adjetivo o Articulo"}<br></br><br></br>
            {"De – Predicado, Sujeto."}<br></br><br></br>

            {"Esto se basa en ejemplos de oraciones sencillas como Yo camino en la calle."}<br></br><br></br>

            {"Yo sujeto, camino verbo, en la calle predicado que contiene articulos entre otros elementos. Esta forma normal y lógica de sintaxis pudieramos abstraerlas en sus funcionalidades."}<br></br><br></br>


            {"Sujeto, Verbo Predicado y expiremtar arbitrariamente con esto como"}<br></br><br></br>

            {"Verbo, Sujeto, Predicado"}<br></br><br></br>

            {"Predicado, Sujeto, Verbo"}<br></br><br></br>

            {"Entre otras permutaciones que nos permitan adjudicar libremente funcionalidades gramaticales a el contenido de una oración lógica."}<br></br><br></br>

            {"En el caso de una oración o sintaxis ilógica ya de por si nos da la libertad para experimentar estas otredades que adquirimos de su estructura."}<br></br><br></br>

            {"Lo otro que se habla en A Thesis On ______ también y que es parte de La Lógica de La Otredad es el potencial multisemiótico basado en la carencia de su especificidad o contenido. Este concepto va mas allá cuando se estudia mas elaboradamente a tal nivel de lograr llegar por disminución de especificidad semiótica y literal a las formas. En un caso extremo vemos como el lenguaje se abstrae a formas como en el caso de la poesía concreta, poesía visual que abrazan la experiencia concreta y visual del material escrito. En algunos casos se elabora este material como en el caso de poesía semiótica que le dan semiótismo a estas figuras mas objetuales y formales como el potencial semiótico de una linea o una letra por si sola. En el caso de este procedimiento de extracción de contenido nuevo se especifica un fenómeno observado del pensamiento humano basado en algunos plantiamientos post estructuralistas sobre la palabra teniendo una relatividad semiótica. En este caso se quiere ser determinista incluso un determinismo aunque sea el resultado una pluralidad de diferentes contenidos y definiciones múltiples pero todas detemrinistas deliniando una contorno de su contenido objetual logrando adquirir una verdad del mismo."}<br></br><br></br>

            {"El potencial multisemiótico, repito, se basa en la carencia de especificidad de lo escrito llegando al extremo de las formas."}<br></br><br></br>

            {"Una de las cosas que se consideran en la investigación de estos dos conceptos a relacionarse es investigar cada uno etimológicamente como tambien su contenido semiótico en una gestalt popular incluso universal considerando la palabra universal como una imposición de el concepto de una manera absolutista en el espacio metafísico y quizas físico. Esto ayudará a la elaboración de posiblidades de sintesis de estos dos o mas constructos, oobjetos, conceptos y quizas cosas."}<br></br><br></br>

            {"Una de las cosas que se consideran en la investigación de estos dos conceptos a relacionarse es investigar cada uno etimológicamente como tambien su contenido semiótico en una gestalt popular incluso universal considerando la palabra universal como una imposición de el concepto de una manera absolutista en el espacio metafísico y quizas físico. Esto ayudará a la elaboración de posiblidades de sintesis de estos dos o mas constructos, oobjetos, conceptos y quizas cosas."}<br></br><br></br>

            {"Una de los fenómenos interesantes que suele suceder en estas investigaciones es que la investigación puede llevarte a crear muchas otras cosas no previstas en un principio y quizas constructos muy válidos pero no de tu tema principal. Esto es un resultado muy gratificante de esta exploración conceptual y quizas científica."}<br></br><br></br>

            </p>
              </div>   
              </Col>
          </Row>

          <Row>      
        <Col>
        <h3>Sobre el folclor Boricua y su posible desarrollo.</h3>

        <div style={{ 
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
            padding: "5%"}}>
            <p>
            {"Para empezar elaboraré sobre mis pensamientos de la bomba y la plena. Estos dos géneros mayormente son enseñados mediante una tradición oral. Esto significa que los constructora europeos musicales no están vigentes en la conciencia del folclorista. Esto da la posibilidad de generar significados mas abiertos en cuanto a el material y su enseñanza. Esta manera de pensar tiene el potencial de desarrollar nuevas formas de expresión rítmica y melódica sin pensar en lo que es la notación tradicional italiana. Se puede pensar conceptos como armonía de una manera mas abierta y general como también especificas a diferentes parámetros musicales y naturales. Harmonia ritmica, de densidades, de contrapunto como también harmonía en su totalidad."}<br></br><br></br>
            {"Esta apertura conceptual cada folclorista tendrá sus constructora y formas de expresar su conocimiento musical. Un ejemplo mas relacionado a lo musical seria melodía rítmica siendo este constructo uno que define una relación de su significado tradicional a uno mas amplio con una nueva especificidad. Estoy seguro que algún folclorista pudiera utilizar cosas de su diario vivir y experiencias para referirse mas abundantemente a el material musical. Esto último me parece bien importante para la exploración conceptual que potencia la evolución del genero de una manera mas auténtica."}<br></br><br></br>      
            {"En la bomba y la plena se puede apreciar un dinamismo de tensión o disonancia rítmica a una resolución y/o consonancia rítmica. Me parece que puede ser algo esencial para componer un buen toque de plena y bomba."}<br></br><br></br>       
            {"Unas ideas que pudieran generar un desarrollo particular autentico y folclórico es abrazar la abundancia semiótica de constructos no europeos. Un ejemplo de esto en la bomba pudiera ser una mayor soltura rítmica la cual me fue inspirada por el bailador Leroy y algunos flacos bailadores ágiles que desafían la simetría rígida de la bomba. Esto como punto de partida pudiera generar una organicidad y complejidad sutil que lograría estirar y contraer la estructura rígida de la bomba y la plena."}<br></br><br></br>           
            {"La otra idea es mas tradicional y se basa en sencillamente seguir la simpleza harmónica de el contenido musical creando diferentes Ritmos y melodías basadas en la tradición y sus reglas sublimes secretas que evocan un minimalismo dinámico limitado musicalmente dinámico y autosustentable. Esta autosustentabilidad si se mantiene y su harmonía total en referencia a la disonancia o tensión rítmica a la consonancia o resolución rítmica es consistente se pudiera extender la unidad temática. Esta unidad no tiene que ser medida estrictamente con números y puede ser aural creando unas longitudes de tiempo extremadamente complejas e infinitesimales en otras palabras orgánicas y maleable dependiendo en la sensación instantánea del conjunto o líder. Esto crearía unas secciones impares o no simétricas."}<br></br><br></br>           
            {"También se pudiera implementar una autopoiesis y referirla a una dinámica generativa que pudiera ser la interacción dinámica de los miembros del conjunto folclórico generando y evolucionando a nuevas estructuras. La improvisación bien conocida por muchos instrumentistas tiene un potencial generativo y autopoietico que puediera dinamizar y evolucionar las estructuras rígidas folclóricas."}<br></br><br></br>
            </p>
              </div>   
              </Col>
          </Row>

          <Row>      
        <Col>
        <h3>Propuesta para desarrollar constructos musicales no europeos.</h3>

        <div style={{ 
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
            padding: "5%"}}>
            <p>
            {"Si seguimos la linea de pensamiento anterior pudiéramos redefinir ciertos rangos de complejidades de variables sonoras y musicales como una unidad quizas utilizando las típicas alegorias de la tradición oral. Estas unidades se pudieran alterar o manipular con constructos mas amplios en significado como amanecer, noche, baile, felicidad, buya entre otras palabras y conceptos que adquieren una abundancia semiótica."}<br></br><br></br>
            {"Se pudiera formalizar estas formas de estructurar la música de manera que se convierta en un canon de donde se base una tradición nueva basada en el folclor y lenguaje autóctono. En resumidas cuentas el reinventar la rueda de constructos musicales de nuevo con la abundancia que ofrece la ignorancia ante constructos musicales pre establecidos. La ignorancia que otorga la mal utilisación de conceptos como lo seria una pentatónica del rítmica como escuché a un maestro callejero rumbero en mis tiempos en Boston. Esta pentatónica rítmica se referia a las notas de la conga pero en mi conciencia se expande el concepto del ritmo con la síntesis de la palabra pentatónica, pentatónica rítmica ya logra otro constructo musical que se pudiera usar y esto es basado en un error debido a la ignorancia aunque de una manera mas incisiva yo pudiera pensar que la pentatónica melódica de las congas para el esta integrado con el ritmo como unidad mas abarcadora que solo esos dos conceptos puros establecidos. Este es el potencial de la ignorancia al igual que el uso de alegorias para definir constructos musicales, expanden la unidad de material y el control viene siendo desde microscópico a macroscópico"}<br></br><br></br>          
            {"Si se serializa estos contenidos simbólicos, semióticos que controlan las unidades musicales-sonora se puede lograr una diversidad de niveles que pudieran ser organizados y permutados de infinitas maneras. Esto lograría una riqueza abundante y autenticidad conceptual y técnica en relación a la creación de obras basadas en constructor autóctonos."}<br></br><br></br>       
            </p>
              </div>   
              </Col>
          </Row>

</div>

  );
}
