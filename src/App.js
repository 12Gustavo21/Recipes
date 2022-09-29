import React from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';
import { GlobalStyle } from './components/global/style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}