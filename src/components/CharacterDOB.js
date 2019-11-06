import React from "react";
import styled from "styled-components";

const DOB = styled.h3`
color: white;
`;

export default function CharacterDOB(props) {

    return <DOB>DOB: {props.dob}</DOB>
}