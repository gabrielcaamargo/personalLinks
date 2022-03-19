import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container } from '../themes/global';
import { LinkTag, Link, Title } from './styles';


export default function Links(){
  return(
    <Container>
      <Title>Links</Title>
      <LinkTag>
        <Link href="https://github.com/gabrielcaamargo" target="_blank"><FontAwesomeIcon icon={faGithub}/></Link>
        <Link href="https://instagram.com/gabcamargo" target="_blank"><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link href="https://linkedin.com/in/gabrielcaamargo/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></Link>
      </LinkTag>
    </Container>
  )
}