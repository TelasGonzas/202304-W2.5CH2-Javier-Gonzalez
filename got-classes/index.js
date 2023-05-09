import { King } from "./king.js";
import { Fighter } from "./fighter.js";
import { Adviser } from "./adviser.js";
import { Squire } from "./squire.js";

const poisonBoy = new King("Joffrey", "Baratheon", 14, "alive", 2);

const lastHandStanding = new Fighter(
  "Jamie",
  "Lannister",
  34,
  "alive",
  "Metal hand",
  10
);

const dragonsMom = new Fighter(
  "Daenerys",
  "Targaryen",
  16,
  "alive",
  "Drogon",
  10
);

const halfMen = new Adviser("Tyrion", "Lannister", 27, "alive", "Daenerys");

const serBronnOfTheBlackWaters = new Squire(
  "Bronn",
  "Blackwaters",
  32,
  "alive",
  0
);

const characters = [];

characters.push(
  poisonBoy,
  lastHandStanding,
  dragonsMom,
  halfMen,
  serBronnOfTheBlackWaters
);
