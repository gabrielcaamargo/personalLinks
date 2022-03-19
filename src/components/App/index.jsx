import React from 'react';

import GlobalStyle from '../themes/global'

import Header from '../Header/';
import Stacks from '../Stacks';
import { Container } from './styles';


export default function App(){
  return(
    <Container>
      <GlobalStyle />
      <Header />
      <Stacks />
    </Container>
  )
}