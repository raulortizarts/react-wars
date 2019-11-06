import React from "react";
import styled from "styled-components";

const Homeworld = styled.h3`
color: white;
`;

export default function CharacterHomeworld(props) {

    return <Homeworld>Homeworld: {props.homeworld}</Homeworld>
}