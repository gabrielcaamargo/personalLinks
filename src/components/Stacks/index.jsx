import React from 'react';

import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconsContainer, Title } from './styles';
import { Container } from '../../components/themes/global' 

export default function Stacks(){
  return(
    <Container>
      <IconsContainer>
        <Title>Stacks</Title> 
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJs} />
    </IconsContainer>
    </Container>
  )
}