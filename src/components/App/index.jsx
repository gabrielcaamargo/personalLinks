import React from 'react';

import GlobalStyle from '../themes/global'

import Header from '../Header';
import Skills from '../Skills';
import Links from '../Links'
import { Container } from './styles';


export default function App(){
  return(
    <Container>
      <GlobalStyle />
      <Header />
      <Skills />
      <Links />
    </Container>
  )
}