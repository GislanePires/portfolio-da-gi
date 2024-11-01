import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
 
  }   

`;


function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <About />
    <Footer />
      {/* <h1>sou o app</h1> */}
    </>
  )
}

export default App
