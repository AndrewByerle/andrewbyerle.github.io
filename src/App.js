import { Header, Footer } from "./components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr"
import { FiSend } from "react-icons/fi"



const intro = (<p1 class="intro"><span>Hi, I'm <p2 class="name">Andrew!</p2></span> <span> I am a sophomore at UNC-Chapel Hill <span>studying Computer Science and Music.</span></span></p1>)
const About = (<p2 class="about"><span>Hey! I'm a sophomore at the University of North Carolina at Chapel Hill following my passions for application development and music. I am currently from Northern Virginia (Nova), but I moved frequenly when my parents were in the military.Some of the places I'v lived include Germany, Utah, Nebraska, Maryland, Arizona, Alabama, and Michigan.</span></p2>)
const About2 = (<p2 class="about">
                <div class="about2">
                this is the second part of my paragraph.
                </div>
               </p2>)
               
const blank_space = (<br></br>)
const socials = (<div class="socials"> 
                    <a class="github" href="https://github.com/AndrewByerle"> 
                      <FaGithub size="3em" /> 
                    </a>
                    <a class="mail" href="mailto: andran@live.unc.edu">
                      <FiSend size="3em" />  
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
    <div class="home">
      <div id="static"> 
      {/* <Header /> */}
      </div>
      <div id="content">
        <body class="body">
          <div>
            <p1>
              {blank_space}{blank_space}{blank_space}{blank_space}{blank_space}{blank_space}{blank_space}{blank_space}{blank_space}{blank_space}
              <img id="self" src="/images/self.JPG"/> 
              {intro}
            </p1>
          </div>
        <div>
          <h3 id="aboutme">
            About me 
          </h3>
          <div class="aboutme">
            <img id="fam" src="/images/fam.JPG"/>    
            {About} {About2}           
          </div>
        </div>
      </body>
        {socials}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
