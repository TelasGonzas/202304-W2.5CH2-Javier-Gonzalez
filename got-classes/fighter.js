import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name, family, age, alive, weapon, skill) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = skill;
    this.sentence = "Primero pego y luego pregunto";
  }
}
