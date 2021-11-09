import React from "react";
import HeadResume from "../components/HeadResume";
import Skills from "../components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Resume = () => {
  return (
    <div id="resume">
      <HeadResume />
      <Container>
        <LeftDiv>
          <div>
            <h2> EDUCATION</h2>
            <p>2007 - 2011</p>
            <p>GRAMMAR SCHOOL</p>
            <p>in Liptovsky Mikulas, Slovakia</p>
          </div>
          <div>
            <h2> LANGUEAGES</h2>
            <SkillDiv>
              <Skills skill="SLOVAK" />
              <SkillPoints>
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
              </SkillPoints>
            </SkillDiv>
            <SkillDiv>
              <Skills skill="CZECH" />
              <SkillPoints>
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
              </SkillPoints>
            </SkillDiv>
            <SkillDiv>
              <Skills skill="ENGLISH" />
              <SkillPoints>
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
                <GreenCircle icon={faCircle} />
              </SkillPoints>
            </SkillDiv>
          </div>
          <div>
            <h2>WORK EXPERIENCE</h2>
            <div>
              <h3>AMAZON ASSOCIATE</h3>
              <p>AUG 2020 - AUG2021</p>
              <p>AMAZON, MANCHESTER</p>
            </div>
            <div>
              <h3>BAR SUPERVISOR</h3>
              <p>DEC 2015 - AUG2020</p>
              <p>BRITANNIA COUNTRY HOUSE HOTEL, MANCHESTER</p>
            </div>
          </div>
        </LeftDiv>
        <div>
          <h2>FRONT-END SKILLS</h2>
          <SkillDiv>
            <Skills skill="Figma" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="HTML5" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="CSS3" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="JAVASCRIPT" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="REACT JS" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="RECOIL JS" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="STYLED COMPONENTS" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="GITHUB" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="SASS" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="SEO" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="RESPONSIVE DESIGN" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="GIT/VERSION CONTROL" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE PHOTOSHOP" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE LIGHTROOM" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE PREMIERE PRO" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="VIRTUAL CUT PRO" />
            <SkillPoints>
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
        </div>
      </Container>
    </div>
  );
};
const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem 10rem;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-weight: bolder;
    color: #2dd1a0;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  p {
    color: #2dd1a0;
    margin-top: 0.5rem;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  h2 {
    font-size: 2rem;
  }
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
`;
const SkillPoints = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const GreenCircle = styled(FontAwesomeIcon)`
  color: #2dd1a0;
`;
const WhiteCircle = styled(FontAwesomeIcon)`
  color: #fff;
`;
export default Resume;
