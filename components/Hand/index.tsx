import { IEntity } from "@/interfaces/entities";
import styles from "./hand.module.css";
import { TCard, TPokemonCard } from "@/types/globals";
import { Fragment, useEffect, useState } from "react";
import HandCard from "../Cards/HandCard";

type HandProp = Pick<IEntity, "hand">;

const HandComponent = ({ hand }: HandProp) => {
  const [hoverCard, setHoverCard] = useState<TCard | TPokemonCard | null>(null);

  return (
    <>
      {/* {hoverCard ? (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            top: "50%",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {hoverCard.type === "pokemon" ? <></> : null}
        </div>
      ) : null} */}
      <div className={styles.handContainer}>
        {hand.map((card, index) => (
          <Fragment key={card.id}>{card.type === "pokemon" ? <></> : null}</Fragment>
        ))}
      </div>
    </>
  );
};

export default HandComponent;
