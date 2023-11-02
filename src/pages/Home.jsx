import React, { useEffect, useState } from "react";
import PokemonCard from "../components/common/PokemonCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../customHooks/useFetch";

function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsLoading, setPokemonsLoading] = useState(false);
  const { error, loading, data } = useFetch(url);

  useEffect(() => {
    if (data && !loading) {
      setPokemonsLoading(true);
      data.results.forEach(async (item) => {
        try {
          const res = await fetch(item.url);
          const data = await res.json();
          setPokemons((p) => [...p, data]);
        } catch (error) {
          console.log(error);
        }
      });
      setPokemonsLoading(false);
    }
  }, [data, loading]);

  if (pokemonsLoading || loading) return <h1> Loading </h1>;

  if (pokemons.length === 0) return <h1>No Data Found!</h1>;

  return (
    <Container className="py-5">
      <Row xs={1} md={2} lg={4} className="g-3">
        {pokemons.map((item, index) => (
          <Col key={index}>
            <PokemonCard pokemon={item} />
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          <Button
            className="w-100"
            onClick={() => {
              setPokemons([]);
              setUrl(data.previous);
            }}
          >
            Previous
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100"
            onClick={() => {
              setPokemons([]);
              setUrl(data.next);
            }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
