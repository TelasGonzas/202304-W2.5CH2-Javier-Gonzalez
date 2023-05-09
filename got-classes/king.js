import { Character } from "./character.js";

export class King extends Character {
  constructor(name, family, age, alive, reignYears) {
    super("name", "family", "age");
    this.reignYears = reignYears;
    this.sentence = "Primero pego y luego pregunto";
  }
}
