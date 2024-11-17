import styled, { keyframes } from "styled-components";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import Projects from "../Projects";
import Slider from "../Slider";

const blinkCursor = keyframes`
    from {
        border-right-color: rgba(255, 255, 255, .75);
    }
    
    to {
        border-right-color: transparent;
    }
`;
const blinkCursor2 = keyframes`
    from {
        border-right-color: transparent;
    }
    
    to {
        border-right-color: rgba(255, 255, 255, .75);
    }
`;
const typing = keyframes`
    from {
        width: 0;
        height: 1.2em;
    }
    to {
        width: 13em;
        height: 1.2em;
    }
`;
const typing2 = keyframes`
    from {
        width: 0;
        height: 1.2em;
    }
    to {
        width: 15em;
        height: 1.2em;
    }


`;
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
`;
const AboutText = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 16vh;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Special Elite", monospace;
`;
const Line1 = styled.p`
  font-size: 1.6em;
  margin: 0 auto;
  border-right: 2px solid rgba(80, 21, 109, 0.75);
  animation: ${blinkCursor} 5s steps(3) normal both,
    ${typing} 5s steps(40) normal both;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-align: center;
`;
const Line2 = styled.p`
  font-size: 1.6em;
  margin: 0 auto;
  border-right: 2px solid rgba(68, 15, 95, 0.75);
  animation: ${blinkCursor2} 1s steps(3) infinite normal both,
    ${typing2} 5s steps(40) normal both;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-align: center;
  animation-delay: 5s;
`;
const AboutPerfil = styled.section`
  display: flex;
  width: 100%;
  height: 40vh;
  background-color: rgb(0, 0, 0);
  justify-content: space-between;
  align-items: center;
  padding: 8rem;
  /* border: solid 2px pink; */
  img {
    width: 20rem;
    height: 18rem;
    border-radius: 100%;
  }
`;
const MainAbout = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.75);
  width: 60vw;
  height: 80vh;
  background-color: #151515;
  padding: 3rem;
  border-radius: 0.3rem;
  border: solid 2px #242424;
  font-family: "Anek Devanagari", sans-serif;

  img {
    width: 30vw;
    height: 50vh;
    border-radius: 0.3rem;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 12vh;

    button {
      color: #966cfc;
      width: 6rem;
      height: 4rem;
      border: solid 2px #242424;
      border-radius: 0.5rem;
      padding: 0.5rem;
      background-color: #111111;
      cursor: pointer;
      position: relative;
      bottom: 1.2rem;
      transition: all 0.8s ease;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-5px);
        border: solid 2px #966cfc;
      }
    }
  }
`;
const GithubIcon = styled(SlSocialGithub)`
  width: 4rem;
  height: 2.5rem;
`;
const LinkedinIcon = styled(SlSocialLinkedin)`
  width: 4rem;
  height: 2.5rem;
`;
const ContainerImg = styled.section`
  display: flex;
  align-items: center;
`;
const MainText = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  height: 90%;
  justify-content: space-around;
  h3 {
    color: #966cfc;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    padding-bottom: 2rem;
  }
`;
const Emphasis = styled.p`
  font-size: 1.3em;
`;
const ProjectSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: rgb(2 ,2, 7);
  box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1);
  color: #fff;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    text-align: center;
    font-family: "Anek Devanagari", sans-serif;
    font-size: 2.5rem;
    color: var(--color-text);
  }
`;
export default function About() {
  return (
    <AboutSection id="sobre">
      <AboutPerfil>
        <AboutText>
          <Line1>Olá, sou a Gislane Lima!</Line1>
          <Line2>Mas pode me chamar de Gisa...</Line2>
        </AboutText>
        <img src="" alt="perfil" />
      </AboutPerfil>
      <MainAbout>
        <ContainerImg>
          <img src="./girl-developer.jpg" alt="" />
          <MainText>
            <h3>Quem sou</h3>
            <h2>Gislane Lima</h2>
            <Emphasis>Frontend Developer</Emphasis>
            <p>
              Meu nome é Gislane Lima, ou "Gisa" - como a maioria das pessoas me
              conhece. Atualmente sou estudante de Desenvolvimento de sistemas e
              UI Designer. Gosto de desenvolver interfaces interativas,
              responsivas e modernas
            </p>
            <div>
              <button
                onClick={() =>
                  window.open("https://github.com/GislanePires", "_blank")
                }
              >
                <GithubIcon />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gislanepires",
                    "_blank"
                  )
                }
              >
                <LinkedinIcon />
              </button>
            </div>
          </MainText>
        </ContainerImg>
      </MainAbout>
      <ProjectSection id="projetos">
        <h2>Projetos</h2>
        {/* <Projects /> */}
        <Slider />
      </ProjectSection>
    </AboutSection>
  );
}
