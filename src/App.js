import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import { resolve } from "path";
import CharacterList from "./components/CharacterList";

const App = () => {
  // Try to think through what state you"ll need for this app before starting. Then build out
  // the state properties here.

  const [character, characterdata] = useState([]);
  useEffect (() => {

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  axios.get("https://swapi.co/api/people/")
  .then (resolve => {
    //console.log(resolve.data.results);
    characterdata(resolve.data.results);
  })
  .catch (error => console.log("error", error))
}, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

    {character.map((people, index) => {
      
      return <CharacterList key={index} people={people} />;
        
    })}

    </div>
  );
}

export default App;
