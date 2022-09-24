import React from 'react';
import Header from './components/Header/index';
import { GlobalStyle } from './components/global/style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      
      <Header />
    </div>
  )
}