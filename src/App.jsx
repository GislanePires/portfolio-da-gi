import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import * as S from "./GlobalStyle";


function App() {

  return (
    <>
    <S.GlobalStyle />
    <Header />
    <About />
    <Footer />
    </>
  )
}

export default App
