import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        onClick={() => {
          navigate(`pokemonDetails/${pokemon.name}`, { state: pokemon });
        }}
      >
        <Card.Img
          variant="top"
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default PokemonCard;
