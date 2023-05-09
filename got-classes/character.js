export class Character {
  name;
  family;
  age;
  alive;
  constructor(name, family, age, alive = true) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = alive;
  }
}
