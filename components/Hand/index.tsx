import { IEntity } from "@/interfaces/entities";
import styles from "./hand.module.css";
import { TCard } from "@/types/globals";
import { useState } from "react";

type HandProp = Pick<IEntity, "hand">;

const HandComponent = ({ hand }: HandProp) => {
  const [hoverCard, setHoverCard] = useState<TCard>();


  return (
    <div className={styles.handContainer}>
      {hand.map((card, index) => (
        <div
          key={index}
          className={styles.card}
          onMouseEnter={() => setHoverCard(card)}
        >
          <div className={styles.stat}>HP: 60</div>

          <div
            className={styles.image}
            style={{
              backgroundImage: `url("https://pbs.twimg.com/media/ERPDVqzWAAUwLRl.png")`,
            }}
          ></div>
          <div className={styles.name}>Pikachu</div>
          <div className={styles.type}>Electric</div>
          {/* <div className={styles.description}>
            An electric-type Pokémon known for its lightning-fast speed.
          </div> */}
          <div className={styles.stats}>
            <div className={styles.stat}>Attack: name</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HandComponent;
