import styled from "styled-components";

const AboutHeader = styled.section`

width: 100%;
height: 50vh;
 background-image: 
 linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
      ), 
      url("./bg1.jpg");
    /* box-shadow: 300px 500px 60px 100px rgb(0, 0, 0); */
    background-size: cover;
    background-position: center;
    /* box-shadow: 0px -83px 77px 23px rgba(0,0,0,1) inset;
    -webkit-box-shadow: 0px -83px 77px 23px rgba(0,0,0,1) inset;
    -moz-box-shadow: 0px -83px 77px 23px rgba(0,0,0,1) inset; */
    box-shadow: 0px -83px 131px 65px rgba(0,0,0,1) inset;
    -webkit-box-shadow: 0px -83px 131px 65px rgba(0,0,0,1) inset;
    -moz-box-shadow: 0px -83px 131px 65px rgba(0,0,0,1) inset;
`;
export default function Header() {
    return(
        <AboutHeader>

            <h1>Header</h1>
        </AboutHeader>
    );
}