import React from "react";
import styled from "styled-components";

const SkinColor = styled.h3`
  color: gold;
`;

export default function CharacterSkin(props) {
  
  return <SkinColor>Skin Color: {props.skincolor}</SkinColor>;
}