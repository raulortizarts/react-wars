import React from "react";
import styled from "styled-components";

import CharacterGender from "./CharacterGender";
import CharacterDOB from "./CharacterDOB";
import CharacterEyes from "./CharacterEyes";
import CharacterHair from "./CharacterHair";
import CharacterSkin from "./CharacterSkin";
import CharacterHomeworld from "./CharacterHomeworld";
import CharacterSpecies from "./CharacterSpecies";

const List = styled.div`
width: 800px;
margin: 15px auto;
background: rgb(47,47,47, 0.3);
border-radius: 20px;
box-shadow: 5px 6px 5px;
display: flex;
flex-direction: column;
justify content: space-evenly;`;

const Title = styled.h1`
color: white;
margin: 5px;
padding: 10px;
text-align: left;
`;

const Name = styled.h2`
color: white;
`;

const Id= styled.div`
width: 750px;
margin: 0 auto;
background: rgba(0.8,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 6px 5px;
display: flex;
flex-direction: row;
justify-content: flex-end;
 `;

const Picture = styled.div`
width: 150px;
height: 100px;
margin: 10px;
background: rgba(0.8,0,0,0.5);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
align-items: center;
text-align: center;
 `;

 const Title2= styled.h4`
 color: white;
 margin: 10px;
 text-align: left;

`;

const Description = styled.div`
width: 750px;
height: 100%
margin: 10px auto;
background: rgba(0.8,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 6px 5px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export default function CharacterList(props) {

    return (
        <List>
            <Title>Multi Pass</Title>

            <Name>{props.people.name}</Name>

            <Id>
                <Picture>USER PICTURE</Picture>
            
                <CharacterDOB dob={props.people.birth_year} />
                <CharacterSpecies species={props.people.species} />
                <CharacterHomeworld homeworld={props.people.homeworld}/>
            </Id>

            <Description>
                <Title2>Description:</Title2>
                <CharacterGender gender={props.people.gender} />
                <CharacterSkin skincolor={props.people.skin_color} />
                <CharacterEyes eyecolor={props.people.eye_color} />
                <CharacterHair haircolor={props.people.hair_color} />
            </Description>
        </List>
    )
}
