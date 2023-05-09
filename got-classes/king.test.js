import { King } from "./king.js";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const king = new King("name", "family", "age", true, "reignYears");
      expect(king).toHaveProperty("tvShow", "GOT");
      expect(king).toHaveProperty("name", "name");
      expect(king).toHaveProperty("family", "family");
      expect(king).toHaveProperty("age", "age");
      expect(king).toHaveProperty("alive", true);
      expect(king).toHaveProperty("reignYears", "reignYears");
    });
  });
});
