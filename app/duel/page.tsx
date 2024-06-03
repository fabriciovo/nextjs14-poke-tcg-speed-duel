"use client";
import { useState } from "react";
import styles from "./duel.module.css";
import { IEntity } from "@/interfaces/entities";
import HandComponent from "@/components/Hand";
import { STATIC_ENEMY, STATIC_PLAYER } from "@/utils/staticValues";
import DeckComponent from "@/components/Deck";
import MainPokemonComponent from "@/components/MainPokemon";
import GraveyardComponent from "@/components/Graveyard";
import Actions from "@/components/Actions";

export default function Home() {
  const [turn, setTurn] = useState<boolean>(true);
  const [player, setPlayer] = useState<IEntity>(STATIC_PLAYER);
  const [rival, setRival] = useState<IEntity>(STATIC_ENEMY);

  return (
    <main className={styles.main}>
      {rival ? (
        <div className={styles.container}>
          <div style={{ display: "flex" }}>
            <HandComponent hand={rival.hand} />
            <DeckComponent deck={rival.deck} />
            <GraveyardComponent graveyard={rival.graveyard} />
          </div>
          <MainPokemonComponent pokemon={rival.pokemon} />
        </div>
      ) : null}

      {player ? (
        <div className={styles.container}>
          <Actions />
          <MainPokemonComponent pokemon={player.pokemon} />
          <HandComponent hand={player.hand} />
          <DeckComponent deck={player.deck} />
          <GraveyardComponent graveyard={player.graveyard} />
        </div>
      ) : null}
    </main>
  );
}
