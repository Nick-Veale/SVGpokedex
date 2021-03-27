import React, { useState, useEffect } from "react";
import Head from "next/head";
import Pokedex from "../components/Pokedex";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [stats, setStats] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [abilities, setAbilities] = useState([]);
  const [id, setId] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    console.log(searchTerm);
    await fetch(`http://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.id && setId(data.id);
        data.abilities && setAbilities(data.abilities);
        data.name && setPokemonName(data.name);
        data.types && setPokemonType(data.types[0].type.name);
        data.height && setPokemonHeight(data.height);
        data.weight && setWeight(data.weight);
        data.stats && setStats(data.stats);
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
    setLoading(false);
  };

  const increment = async () => {
    setLoading(true);
    id &&
      (await fetch(`http://pokeapi.co/api/v2/pokemon/${id + 1}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.id && setId(data.id);
          data.abilities && setAbilities(data.abilities);
          data.name && setPokemonName(data.name);
          data.types && setPokemonType(data.types[0].type.name);
          data.height && setPokemonHeight(data.height);
          data.weight && setWeight(data.weight);
          data.stats && setStats(data.stats);
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
        }));
    setLoading(false);
  };

  const decrement = async () => {
    setLoading(true);
    id !== 1 &&
      (await fetch(`http://pokeapi.co/api/v2/pokemon/${id - 1}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.id && setId(data.id);
          data.abilities && setAbilities(data.abilities);
          data.name && setPokemonName(data.name);
          data.types && setPokemonType(data.types[0].type.name);
          data.height && setPokemonHeight(data.height);
          data.weight && setWeight(data.weight);
          data.stats && setStats(data.stats);
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
        }));
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PokeDex</title>
        <link
          rel="icon"
          href="https://image.pngaaa.com/241/259241-middle.png"
        />
      </Head>
      <img
        className={styles.background}
        src="https://free4kwallpapers.com/uploads/originals/2018/06/18/created-a-3d-render-of-a-pokemon-trophy-in-the-grass-wallpaper.jpg"
        alt=""
      />
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
        stats={stats ? stats : ""}
        pokemonHeight={pokemonHeight ? pokemonHeight : ""}
        weight={weight ? weight : ""}
        loading={loading}
        id={id}
        abilities={abilities}
        increment={() => increment()}
        decrement={() => decrement()}
      />
    </div>
  );
}
