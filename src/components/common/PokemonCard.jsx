import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PokemonCard({ image, name, url }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        onClick={() => {
          navigate(`pokemonDetails/${name}`, { state: url });
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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
