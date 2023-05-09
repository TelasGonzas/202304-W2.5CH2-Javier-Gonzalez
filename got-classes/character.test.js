import { Character } from "./character.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const character = new Character("name", "family", "age", true);
      expect(character).toHaveProperty("name", "name");
      expect(character).toHaveProperty("family", "family");
      expect(character).toHaveProperty("age", "age");
      expect(character).toHaveProperty("alive", true);
    });
  });
});
