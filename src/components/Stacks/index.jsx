import React from 'react';

import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Stacks(){
  return(
    <>
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faJs} />
    </>
  )
}