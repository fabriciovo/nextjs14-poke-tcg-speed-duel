"use server";
import Image from "next/image";

const CardList = async () => {
  const response = await fetch("https://api.pokemontcg.io/v2/cards/");

  const { data } = await response.json();

  return (
    <>
      {data?.map((pokemon: any) => (
        <Image
          key={pokemon.id}
          style={{ margin: 4 }}
          src={pokemon.images.large}
          width={340}
          height={340}
          alt={pokemon.name}
        />
      ))}
    </>
  );
};

export default CardList;
