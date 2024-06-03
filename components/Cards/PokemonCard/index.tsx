import styles from "./styles.module.css";
import { TPokemonCard } from "@/types/globals";

type PokemonCardProps = {
  card: TPokemonCard;
};

const PokemonCardComponent = ({card}: PokemonCardProps) => {
  return (
    <div className={styles.card}>
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
  );
};

export default PokemonCardComponent;
