import styled from "styled-components";
import Slider from "../Slider";

const ProjectsMain = styled.section`
height: 60vh;
/* background-color: rgb(0, 0, 0,0.8); */
width: 50%;

`;


export default function Projects() {
    return (
        <ProjectsMain>
            <h3>Sessão projetos</h3>
            <Slider />
        </ProjectsMain>
    );
}