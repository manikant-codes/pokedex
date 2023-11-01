import React, { useEffect, useState } from "react";
import PokemonCard from "../components/common/PokemonCard";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!pokemons) return <h1>No Data Found!</h1>;

  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-3">
        {pokemons.results.map((item, index) => (
          <Col key={index}>
            <PokemonCard name={item.name} url={item.url} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
