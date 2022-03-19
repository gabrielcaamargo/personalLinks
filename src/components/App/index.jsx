import React from 'react';

import GlobalStyle from '../themes/global'

import Header from '../Header/';

import { Container } from './styles';

export default function App(){
  return(
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  )
}