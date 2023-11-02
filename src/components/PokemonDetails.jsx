import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PokemonDetailCard from "./common/PokemonDetailCard";

function PokemonDetails() {
  const data = useLocation();
  const pokemon = data.state;

  return (
    <Container>
      <PokemonDetailCard
        name={pokemon.name}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />
    </Container>
  );
}

export default PokemonDetails;
