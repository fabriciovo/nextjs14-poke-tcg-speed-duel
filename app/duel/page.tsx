"use client";
import { useState } from "react";
import styles from "./duel.module.css";
import { IEntity } from "@/interfaces/entities";
import HandComponent from "@/components/Hand";
import { STATIC_ENEMY, STATIC_PLAYER } from "@/utils/staticValues";

export default function Home() {
  const [player, setPlayer] = useState<IEntity>(STATIC_PLAYER);
  const [rival, setRival] = useState<IEntity>(STATIC_ENEMY);

  return (
    <main className={styles.main}>
      {player ? (
          <HandComponent hand={player.hand} />
      ) : null}

      {rival ? (
          <HandComponent hand={rival.hand} />
      ) : null}
    </main>
  );
}
