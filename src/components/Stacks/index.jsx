import React from 'react';

import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container , IconsContainer, Title } from './styles';

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