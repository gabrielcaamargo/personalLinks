import React from 'react';

import { Image, Title, TitleDecoration } from './styles';

export default function Header(){
  return(
    <>
      <Image 
        src="src/images/profile-pic.jpg"
        alt="profile photo" 
      />

     <TitleDecoration>
      &lt;
      <Title>
          Gabriel Camargo  
        </Title>
      &#47;&gt;
     </TitleDecoration>
    </>
  )
}