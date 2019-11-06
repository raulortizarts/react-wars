import React from "react";
import styled from "styled-components";

const Species = styled.h3`
color: white;
`;

export default function CharacterSpecies(props) {

    return <Species>Species: {props.species}</Species>
}