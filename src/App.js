import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ pokemonList, setPokemonList ] = useState([]);
  
  const clickHandler = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=802')
      .then( res => console.log(res))
      .catch( err => console.log(err));

    console.log("Thanks for clicking");
  };

  return (
    <div className="App">
      <button onClick={ clickHandler }>Fetch pokemons</button>


    </div>
  );
}

export default App;
