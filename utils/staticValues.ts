import { IEntity } from "@/interfaces/entities";

export const STATIC_PLAYER: IEntity = {
  hand: [
    {
      name: "string",
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
    },
    {
      name: "string",
    },
    {
      name: "string",
    },
    {
      name: "string",
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
  },
  isPlayer: true,
};

export const STATIC_ENEMY: IEntity = {
    hand: [
      {
        name: "string",
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
      },
      {
        name: "string",
      },
      {
        name: "string",
      },
      {
        name: "string",
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
    },
    isPlayer: false,
  };
  