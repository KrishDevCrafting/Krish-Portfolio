import React,{useRef} from "react";
import Main from "./home/Main";
import Myservice from "./home/Myservice";
import AboutMe from "./home/AboutMe";
import Myprojects from "./home/myProject";
import Footer from "./Footers";
import Nav from "./NavBar";
const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div>
        <Nav onAboutclick={scrollToAbout} />
        <Main />
        <Myservice />
        <AboutMe ref={aboutRef}/>
        <Myprojects />
        <Footer />
      </div>
    </>
  );
};

export default Home;
