import { IEntity } from "@/interfaces/entities";

export const STATIC_PLAYER: IEntity = {
  hand: [
    {
      name: "string",
      type: "pokemon",
      attack1: "string",
      attack2: "string",
      special: "string",
      weak: "string",
      maxLife: "string",
      life: "string",
      energy: 0,
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
  ],
  banned: [],
  graveyard: [],
  bank: [],
  deck: [],
  pokemon: {
    name: "string",
    attack1: "string",
    attack2: "string",
    special: "string",
    weak: "string",
    maxLife: "string",
    life: "string",
    energy: 0,
    type: "pokemon",
  },
  isPlayer: true,
};

export const STATIC_ENEMY: IEntity = {
  hand: [
    {
      name: "string",
      type: "pokemon",
      attack1: "string",
      attack2: "string",
      special: "string",
      weak: "string",
      maxLife: "string",
      life: "string",
      energy: 0,
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
    {
      name: "string",
      type: "pokemon",
    },
  ],
  banned: [],
  graveyard: [],
  bank: [],
  deck: [],
  pokemon: {
    name: "string",
    type: "pokemon",
    attack1: "string",
    attack2: "string",
    special: "string",
    weak: "string",
    maxLife: "string",
    life: "string",
    energy: 0,
  },
  isPlayer: false,
};
