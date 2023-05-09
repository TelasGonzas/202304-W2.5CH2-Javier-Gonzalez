import { Adviser } from "./adviser.js";

describe("Given Adviser class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const adviser = new Adviser(
        "name",
        "family",
        "age",
        true,
        "characterToAdvise"
      );
      expect(adviser).toHaveProperty("tvShow", "GOT");
      expect(adviser).toHaveProperty("name", "name");
      expect(adviser).toHaveProperty("family", "family");
      expect(adviser).toHaveProperty("age", "age");
      expect(adviser).toHaveProperty("alive", true);
      expect(adviser).toHaveProperty("characterToAdvise", "characterToAdvise");
    });
  });
});
