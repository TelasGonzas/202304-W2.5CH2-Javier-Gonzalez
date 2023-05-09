import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, alive, arseLicking) {
    super(name, family, age);
    this.arseLicking = arseLicking;
    this.sentence = "Soy un loser";
    this.serviceCharacter = "fighter";
  }
}
