import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, alive, blackKisser) {
    super("name", "family", "age", true);
    this.blackKisser = blackKisser;
    this.sentence = "Soy un loser";
    this.serviceCharacter = "fighter";
  }
}
