import styled from "styled-components";

const AboutSection = styled.section`
width: 100%;
height: 40vh;
background-color: rgb(0, 0, 0);
display: flex;
justify-content: space-around;
align-items: center;
padding: 8rem;
img {
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    
}
`;
const AboutText = styled.article`
width: 100%;
height: 100%;
color: rgba(255, 255, 255, .75);
font-family: 'Special Elite', monospace;

`;
export default function About(){
    return (
        <AboutSection>
            <AboutText>
                <p>Olá, eu sou a Gislane Lima! Mas pode me chamar de Gisa...</p>
            </AboutText>
            <img src="./perfil.jpg" alt="perfil" />
        </AboutSection>
    );
}