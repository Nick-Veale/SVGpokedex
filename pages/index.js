import React, { useState, useEffect } from "react";
import Head from "next/head";
import Pokedex from "../components/Pokedex";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
    fetch(`http://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.name && setPokemonName(data.name);
        data.types && setPokemonType(data.types[0].type.name);
        if (data.id) {
          const strung = data.id.toString();
          console.log(strung.length);
          if (strung.length === 3) {
            setImageUrl(data.id);
          } else if (strung.length === 2) {
            setImageUrl(`0${strung}`);
          } else if (strung.length === 1) {
            console.log(`00${strung}`);
            setImageUrl(`00${strung}`);
          } else {
            return;
          }
        }
      });
  };

  return (
    <div className={styles.container}>
      <Pokedex
        width="100vw"
        height="90vh"
        imageUrl={
          imageUrl
            ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageUrl}.png`
            : ""
        }
        setSearchTerm={(e) => setSearchTerm(e.target.value)}
        searchTerm={searchTerm}
        submit={() => handleSearch()}
        name={pokemonName ? pokemonName : ""}
        type={pokemonType ? pokemonType : ""}
      />
    </div>
  );
}
