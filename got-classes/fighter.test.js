import { Fighter } from "./fighter.js";

describe("Given Fighter class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const fighter = new Fighter(
        "name",
        "family",
        "age",
        true,
        "weapon",
        "skill"
      );
      expect(fighter).toHaveProperty("tvShow", "GOT");
      expect(fighter).toHaveProperty("name", "name");
      expect(fighter).toHaveProperty("family", "family");
      expect(fighter).toHaveProperty("age", "age");
      expect(fighter).toHaveProperty("alive", true);
      expect(fighter).toHaveProperty("weapon", "weapon");
      expect(fighter).toHaveProperty("skill", "skill");
    });
  });
});
