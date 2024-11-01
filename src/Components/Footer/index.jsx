import styled from "styled-components";
const FooterSection = styled.section`
width: 100%;
height: 40vh;
background-image:
linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.3)
      ),  url(./bg3.jpg);
background-size: cover;
background-position: center;
box-shadow: 0px 72px 128px 94px rgba(0,0,0,1) inset;
-webkit-box-shadow: 0px 72px 128px 94px rgba(0,0,0,1) inset;
-moz-box-shadow: 0px 72px 128px 94px rgba(0,0,0,1) inset;

`;
export default function Footer(){
    return(
        <FooterSection>
            <p>Copywrite</p>
        </FooterSection>
    );
}