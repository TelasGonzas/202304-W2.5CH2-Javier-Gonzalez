import { Fighter } from "./fighter.js";

describe("Given Fighter class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const fighter = new Fighter(
        "name",
        "family",
        "age",
        "alive",
        "weapon",
        "skill"
      );
      expect(fighter).toHaveProperty("tvShow", "GOT");
      expect(fighter).toHaveProperty("name", "name");
      expect(fighter).toHaveProperty("family", "family");
      expect(fighter).toHaveProperty("age", "age");
      expect(fighter).toHaveProperty("alive", "alive");
      expect(fighter).toHaveProperty("weapon", "weapon");
      expect(fighter).toHaveProperty("skill", "skill");
      expect(fighter).toHaveProperty(
        "sentence",
        "Primero pego y luego pregunto"
      );
    });
  });
});
