import styled from "styled-components";

const AboutSection = styled.section`
width: 100%;
height: 40vh;
background-color: rgb(0, 0, 0);
display: flex;
justify-content: space-around;
align-items: center;
`;
const AboutText = styled.article`
width: 100%;
height: 100%;
color: rgba(255, 255, 255, .75);
font-family: 'Special Elite', monospace;
padding: 3rem;
`;
export default function About(){
    return (
        <AboutSection>
            <AboutText>
                <p>Olá, eu sou a Gislane Lima! Mas pode me chamar de Gisa...</p>
            </AboutText>
            <img src="" alt="" />
        </AboutSection>
    );
}