import { Header, Footer } from "./components";
import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr"
import { FiSend } from "react-icons/fi"



const intro = (<p1 class="intro"><span>Hi, I'm <p2 class="name">Andrew!</p2></span> I am a sophomore at UNC-Chapel Hill <span>studying Computer Science and Music.</span></p1>)
const About = (<p2 class="about"><b>Hey!</b>I'm a sophomore at the University of North Carolina at Chapel Hill following my passions for application development and music. On campus, I channel my creative energy into project development for UNC's Google Develeper Student Club and solving technical problems in my community for CS + Social Good. I have also played the piano for as long as I can remember, and I am an active clarinetist in the UNC Clarinet Studio and Wind Ensemble.    </p2>)
const About2 = (<p2 class="about">
                <div class="about2">
                  I am from Northern Virginia (NoVa), but I've traveled to many different places growing up as a military brat. Some of the places I've lived include Germany, Utah, Nebraska, Maryland, Arizona, Alabama, and Michigan.
                </div>
               </p2>)
const socials = (<div class="socials"> 
                    <a class="mail" href="mailto: andran@live.unc.edu">
                      <FiSend size="3em" />  
                    </a> 
                    <a class="github" href="https://github.com/AndrewByerle"> 
                      <FaGithub size="3em" /> 
                    </a>
                    <a class="linkedin" href="https://www.linkedin.com/in/andrew-byerle/">
                      <FaLinkedinIn size="3em" />
                    </a> 
                    <a class="insta" href="https://www.instagram.com/andrew_byerle/">
                      <GrInstagram size="3em" />
                    </a>
                 </div>) 


const App = () => {
  return (
    <div id="home">
      <div> 
      {/* <Header /> */}
      </div>
      <div id="content">
        <body class="body">
        <div style={{height: 1500}}>
          <p1>
            {/* space for header below */}
            <div style={{height: 200}} >
            </div>
            <img id="self" src="/images/self.JPG"/> 
            {intro}
          </p1>
          <div>
          <FaArrowDown id="arrow"></FaArrowDown>
          </div>
        </div>
        <div id="ab" >

        </div>
        <div style={{height: 1500}}>
          <h3 class="subheaders">
            About me 
          </h3>
          <div>
            <div class="aboutme">
              <img id="fam" src="/images/fam.JPG"/>    
                {About} {About2}           
            </div>
          </div>
        </div>

        <div id="code" style={{height: 1000}}>
          <h3 class="subheaders">
            Code
          </h3>

        </div>
        </body>
        <div id="socials"> 
          {socials}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
