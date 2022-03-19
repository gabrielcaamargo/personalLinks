import styled, { createGlobalStyle }  from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #404E5C;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const Container = styled.div`
  background-color: #B7C3F3;
  border-radius: 15px;
  padding: 2px 7.5rem;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
`