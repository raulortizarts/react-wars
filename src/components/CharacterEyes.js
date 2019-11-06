import React from "react";
import styled from "styled-components";

const Eyes = styled.h3`
  color:gold;
`;

export default function CharacterEyes(props) {
  
  return <Eyes>Eyes: {props.eyecolor}</Eyes>;
}