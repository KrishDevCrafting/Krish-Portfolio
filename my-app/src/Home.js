import react from "react";
import Main from "./home/Main";
import Myservice from "./home/Myservice";
import AboutMe from "./home/AboutMe";
import Myprojects from "./home/myProject";
import Footer from "./Footers";
const Home = () => {
  return (
    <>
      <div>
        <Main />
        <Myservice />
        <AboutMe />
        <Myprojects />
        <Footer />
      </div>
    </>
  );
};

export default Home;
