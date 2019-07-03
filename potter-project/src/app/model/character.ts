import { Wand } from './wand';

export class Character {
    name: string;
    image: string;
    house: string;
    hogwarstStaff: boolean;
    dateOfBirth: string;
    actor: string;
    alive: boolean;
    wand: Wand;

    constructor( 
        name: string,
        image: string,
        house: string,
        hogwarstStaff: boolean,
        dateOfBirth: string,
        actor: string,
        alive: boolean,
        wand: Wand
        ) {
        this.name = name;
        this.image = image;
        this.house = house;
        this.hogwarstStaff = hogwarstStaff;
        this.dateOfBirth = dateOfBirth;
        this.actor = actor;
        this.alive = alive;
        this.wand = wand;
    }
}