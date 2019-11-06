import React from "react";
import styled from "styled-components";

const HairColor = styled.h3`
  color: gold;
`;

export default function CharacterHair(props) {
  
  return <HairColor>Hair: {props.haircolor}</HairColor>;
}