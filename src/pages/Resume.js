import React from "react";
import HeadResume from "../components/HeadResume";
import Skills from "../components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <RightDiv>
          <h2>FRONT-END SKILLS</h2>
          <SkillDiv>
            <Skills skill="Figma" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="HTML5" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="CSS3" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="JAVASCRIPT" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="REACT JS" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="RECOIL JS" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="STYLED COMPONENTS" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="GITHUB" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="SASS" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="SEO" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="RESPONSIVE DESIGN" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="GIT/VERSION CONTROL" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE PHOTOSHOP" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE LIGHTROOM" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="ADOBE PREMIERE PRO" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
          <SkillDiv>
            <Skills skill="VIRTUAL CUT PRO" />
            <SkillPoints>
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <GreenCircle icon={faCircle} />
              <WhiteCircle icon={faCircle} />
            </SkillPoints>
          </SkillDiv>
        </RightDiv>
      </Container>
      <StyledCode>
        <h2>MY CODE</h2>
        <div>
          <GreenCircle size="2x" icon={faGithub} />
          <a
            href="https://github.com/Michael-Melis"
            target="_blank"
            rel="noreferrer"
          >
            www.github.com/Michael-Melis
          </a>
        </div>
      </StyledCode>
    </div>
  );
};
const Container = styled.div`
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10rem 10rem;
  justify-content: space-evenly;
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
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
  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    h2 {
      font-size: 1rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    h3 {
      font-weight: bolder;
      color: #2dd1a0;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    p {
      font-size: 0.7rem;
      color: #2dd1a0;
      margin-top: 0.5rem;
    }
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 14%;
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  margin: 1rem 0rem;
`;
const SkillPoints = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const GreenCircle = styled(FontAwesomeIcon)`
  color: #2dd1a0;
  margin-right: 0.4rem;
`;
const WhiteCircle = styled(FontAwesomeIcon)`
  color: #fff;
  margin-right: 0.4rem;
`;
const StyledCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 4rem;
  a {
    color: #fff;
    margin-left: 1rem;
    &:hover {
      color: #2dd1a0;
    }
  }
`;
export default Resume;
