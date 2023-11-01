import React from "react";
import { Card, CardBody, CardImg } from "react-bootstrap";

function PokemonDetailCard({ image, name }) {
  return (
    <div>
      <Card style={{ width: "fit-content" }}>
        <CardImg
          variant="top"
          src={image}
          style={{ height: "250px", width: "250px" }}
        />
        <CardBody>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default PokemonDetailCard;
