import { IEntity } from "@/interfaces/entities";
import styles from "./hand.module.css";
import { TCard, TPokemonCard } from "@/types/globals";
import { Fragment, useState } from "react";
import PokemonCardComponent from "../Cards/PokemonCard";

type HandProp = Pick<IEntity, "hand">;

const HandComponent = ({ hand }: HandProp) => {
  const [hoverCard, setHoverCard] = useState<TCard | TPokemonCard | null>(null);

  return (
    <>
      <div className={styles.handContainer}>
        {hand.map((card) => (
          <Fragment key={card.id}>
            {card.type === "pokemon" ? (
              <PokemonCardComponent card={card as TPokemonCard} />
            ) : null}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default HandComponent;
