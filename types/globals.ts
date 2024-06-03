export type TCard = {
  id: string;
  name: string;
  type: string;
};

export type TPokemonCard = {
  attack1: string;
  attack2: string;
  special: string;
  weak: string;
  maxLife: number;
  life: string;
  energy: number;
} & TCard;
