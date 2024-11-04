import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutHeader = styled.section`
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./bg1.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
`;
const NavList = styled.ul`
/* border: solid 1px blue; */
display: flex;
justify-content: space-around;
align-items: center;
height: 12vh;
padding-top: 4rem;

li {
    list-style: none;
    font-family: "Anek Devanagari", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    
    a {
        color: aliceblue;
        text-decoration:none;

    }

}
`;

export default function Header() {
  return (
    <AboutHeader>
      <nav>
        <NavList>
          <li>
          <a href="#sobre">Sobre</a>
          </li>
          <li>
          <a href="#experiencias">Experiências</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#conhecimentos">Conhecimentos</a>
          </li>
        </NavList>
      </nav>
    </AboutHeader>
  );
}
