
import { Hero } from './hero';

export class Champion implements Hero {
    name: string; title: string; maxLife: number; life: number; attack: number; defense: number;
    magic: number; speed: number; charm: number; weapon: number; abilityA: object; abilityM: object;
    abilityS: object; abilityC: object; pack: object[];
    constructor() {
        this.name='Calagastia'; this.title='Champion'; this.maxLife=42; this.life=42; this.attack=3;
        this.defense=15; this.magic=3; this.speed=1; this.charm=1; this.weapon=6; this.abilityA=Object;
        this.abilityM=Object; this.abilityS=Object; this.abilityC=Object; this.pack=[];
    }

}