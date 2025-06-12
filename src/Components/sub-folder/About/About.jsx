import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../../../assets/myslef.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:nt-24 lg:mt-32 pb-7"
    >
      {/** left side */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-2 leading-tight">
            Hi, I'm
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            Akash Gupta
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "FullStack Developer",
                "Software Engineer",
                "Computer Application Student",
                "Problem Solver",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          <p className="text-base sm:text-lg md-text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a student of Computer Application pursuing from Kurukeshtra
            university with collabration of CodeQuotient School of Technology.I
            am Mern Stack Developer and Currently work at CodeQuotient Co. as a
            Software Engineer Intern.
          </p>
        </div>
        {/** right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:ml-20">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImage}
              alt="Akash Gupta"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
