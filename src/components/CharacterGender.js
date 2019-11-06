import React from "react";
import styled from "styled-components";

const Gender = styled.h3`
  color: gold`;

export default function CharacterGender(props) {
  
  return <Gender>Gender: {props.gender}</Gender>;
}