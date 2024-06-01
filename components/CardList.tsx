"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CardList = () => {
  const [pokemons, setPokemons] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCards() {
      const response = await fetch("https://api.pokemontcg.io/v2/cards/")
        .then((data) => data)
        .then((res) => res.json())
        .catch((err) => {
          setLoading(true);
        })
        .finally(() => setLoading(false));
      setPokemons(response.data);
    }

    getCards();
  }, []);

  return (
    <>
      {loading ? (
        <>LOADING...</>
      ) : (
        <>
          {pokemons.map((pokemon: any) => (
            <Image
              style={{margin: 4}}
              src={pokemon.images.large}
              width={340}
              height={340}
              alt={pokemon.name}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CardList;
