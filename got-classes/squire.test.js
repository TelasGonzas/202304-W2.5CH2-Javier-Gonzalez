import { Squire } from "./squire.js";

describe("Given Squire class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const squire = new Squire(
        "name",
        "family",
        "age",
        "alive",
        "arseLicking"
      );
      expect(squire).toHaveProperty("tvShow", "GOT");
      expect(squire).toHaveProperty("name", "name");
      expect(squire).toHaveProperty("family", "family");
      expect(squire).toHaveProperty("age", "age");
      expect(squire).toHaveProperty("alive", "alive");
      expect(squire).toHaveProperty("arseLicking", "arseLicking");
      expect(squire).toHaveProperty("sentence", "Soy un loser");
    });
  });
});
