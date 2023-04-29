import { Link } from "react-router-dom"
import React, {useState, useEffect } from "react";

const FetchCategorias = () => {
    const [character, setCharacters] = useState([]);

    const getApi = async () => {
        try{
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const data = await res.json();
            
            console.log(data.results);
            
            setCharacters(data.results);
        }catch(error){
            console.log(error);
        }
    };
        useEffect(() => {
            getApi();
        }, []);
        
 
  return (
    <>
        <h1>Fetch</h1>
        <hr />
        { character.map((character)=> 
        <div>
        <h3>{character.name}</h3>
        <img src={character.image} />
        <p>{character.species}</p>
        
        
        </div> )}
    </>
  )
}

export default FetchCategorias
