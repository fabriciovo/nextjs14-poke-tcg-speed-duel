import { TCard, TPokemonCard } from "@/types/globals";

export interface IEntity {
  hand: (TCard | TPokemonCard)[];
  deck: TCard[];
  graveyard: TCard[];
  banned: TCard[];
  bank: TPokemonCard[];
  pokemon: TPokemonCard;
  isPlayer:boolean;
}
