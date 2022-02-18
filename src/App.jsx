import logo from "./logo.svg";
import "./App.css";
import HeaderSection from "./components/header";
import KeySkills from "./components/key-skills";
import AboutMe from "./components/about-me";
import { useState } from "react";
import { useEffect } from "react";
import CustomLoader from "./components/custom-loader";
import ProjectPortfolio from "./components/project-portfolio";
import Experience from "./components/experience";
import Footer from "./components/footer";

function App() {
  const [loader, setLoader] = useState(true);
  // const [loadState, setloadState] = useState(true);

  const showLoader = () => {
    // console.log(loader);
    // setLoader(true);
  };

  useEffect(() => {
    console.log(loader);
    setTimeout(() => {
      setLoader(false);
    }, 500);
    
  });

  return (
    <>
      {loader ? (
        <CustomLoader />
      ) : (
        <div>
          <HeaderSection />
          <KeySkills />
          <AboutMe />
          <ProjectPortfolio />
          <Experience />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
