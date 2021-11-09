import React from "react";
import HeadResume from "../components/HeadResume";
import Skills from "../components/Skills";

const Resume = () => {
  return (
    <div id="resume">
      <HeadResume />
      <div>
        <div>
          <h2> EDUCATION</h2>
          <p>2007 - 2011</p>
          <p>GRAMMAR SCHOOL</p>
          <p>in Liptovsky Mikulas, Slovakia</p>
        </div>
        <div>
          <h2> LANGUEAGES</h2>
          <Skills />
          <Skills />
          <Skills />
        </div>
        <div>
          <h2>WORK EXPERIENCE</h2>
          <div>
            <p>
              <span>AMAZON ASSOCIATE</span>
            </p>
            <p>AUG 2020 - AUG2021</p>
            <p>AMAZON, MANCHESTER</p>
          </div>
          <div>
            <p>
              <span>BAR SUPERVISOR</span>
            </p>
            <p>DEC 2015 - AUG2020</p>
            <p>BRITANNIA COUNTRY HOUSE HOTEL, MANCHESTER</p>
          </div>
        </div>
      </div>
      <div>
        <h2>FRONT-END SKILLS</h2>
        <Skills skill="Figma" />
        <Skills skill="HTML5" />
        <Skills skill="CSS3" />
        <Skills skill="JAVASCRIPT" />
        <Skills skill="REACT JS" />
        <Skills skill="GITHUB" />
        <Skills skill="SASS" />
        <Skills skill="SEO" />
        <Skills skill="RESPONSIVE/MOBILE DESIGN" />
        <Skills skill="GIT/VERSION CONTROL" />
        <Skills skill="RECOIL JS" />
        <Skills skill="ADOBE PHOTOSHOP" />
        <Skills skill="ADOBE LIGHTROOM" />
        <Skills skill="ADOBE PREMIERE PRO" />
        <Skills skill="VIRTUAL CUT PRO" />
      </div>
    </div>
  );
};

export default Resume;
