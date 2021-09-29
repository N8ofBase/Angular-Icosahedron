export interface Hero {
    name: string;
    title: string;
    maxLife: number;
    life: number;
    attack: number;
    defense: number;
    magic: number;
    speed: number;
    charm: number;
    weapon: number;
    abilityA: object;
    abilityM: object;
    abilityS: object;
    abilityC: object;
    pack: object[];
  }