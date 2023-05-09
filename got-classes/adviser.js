import { Character } from "./character.js";

export class Adviser extends Character {
  constructor(name, family, age, alive, characterToAdvise) {
    super(name, family, age);
    this.characterToAdvise = characterToAdvise;
    this.sentence = "No sé por qué, pero creo que voy a morir pronto";
  }
}
