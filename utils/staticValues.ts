import { IEntity } from "@/interfaces/entities";

export const STATIC_PLAYER: IEntity = {
  hand: [
    {
      id: "string12",
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
      id: "string13",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string14",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string15",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string16",
      name: "string",
      type: "pokemon",
    },
  ],
  banned: [],
  graveyard: [],
  bank: [],
  deck: [],
  pokemon: {
    id: "string18",
    name: "string",
    attack1: "string",
    attack2: "string",
    special: "string",
    weak: "string",
    maxLife: 10,
    life: "string",
    energy: 0,
    type: "pokemon",
  },
  isPlayer: true,
};

export const STATIC_ENEMY: IEntity = {
  hand: [
    {
      id: "string1",
      name: "string",
      type: "pokemon",
      attack1: "string",
      attack2: "string",
      special: "string",
      weak: "string",
      maxLife: 10,
      life: "string",
      energy: 0,
    },
    {
      id: "string2",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string3",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string4",
      name: "string",
      type: "pokemon",
    },
    {
      id: "string5",
      name: "string",
      type: "pokemon",
    },
  ],
  banned: [],
  graveyard: [],
  bank: [],
  deck: [],
  pokemon: {
    id: "string6",
    name: "string",
    type: "pokemon",
    attack1: "string",
    attack2: "string",
    special: "string",
    weak: "string",
    maxLife: 10,
    life: "string",
    energy: 0,
  },
  isPlayer: false,
};
