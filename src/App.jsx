import React from "react";
import Navbar from "./Components/sub-folder/Navbar/Navbar.jsx";
import About from "./Components/sub-folder/About/About";
import Footer from "./Components/sub-folder/Footer/Footer";
import Skill from "./Components/sub-folder/Skills/Skill";
import Projects from "./Components/sub-folder/Projects/Projects";
import Contact from "./Components/sub-folder/Contact/Contact";
import Education from "./Components/sub-folder/Education/Education";
import Experince from "./Components/sub-folder/Experince/Experince";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <>
      <div className="bg-[#050414]">
        <BlurBlob position={{top:'25%',left:'10%'}} size={{width:'40%',height:'50%'}}/>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skill />
          <Experince />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
