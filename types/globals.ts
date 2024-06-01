export type TCard = {
  name: string;
  type: string;
};

export type TPokemonCard = {
  attack1: string;
  attack2: string;
  special: string;
  weak: string;
  maxLife: string;
  life: string;
  energy: number;
} & TCard;
