import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonDetailCard from "./common/PokemonDetailCard";
import { Container } from "react-bootstrap";

function PokemonDetails() {
  const data = useLocation();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  console.log(data);

  useEffect(() => {
    fetch(data.state)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemonDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.state]);

  console.log(pokemonDetails);

  if (!pokemonDetails) return <h1>No Data Found!</h1>;

  return (
    <Container>
      <PokemonDetailCard
        name={pokemonDetails.name}
        image={pokemonDetails.sprites.other["official-artwork"].front_default}
      />
    </Container>
  );
}

export default PokemonDetails;
