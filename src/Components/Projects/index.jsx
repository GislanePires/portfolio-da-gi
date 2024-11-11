import styled from "styled-components";
import Slider from "../Slider";

const ProjectsMain = styled.section`
height: 100vh;
background-color: rgb(0, 0, 0);af
`;


export default function Projects() {
    return (
        <ProjectsMain>
            <h3>Sessão projetos</h3>
            <Slider />
        </ProjectsMain>
    );
}