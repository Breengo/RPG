import { CLASSES, CharStats, Class, RACES, Race } from "../data";

class Character {
  name: String = "";

  pClass = CLASSES[0];
  race = RACES[0];

  LVL = 1;

  agile = 10;
  strength = 10;
  intelligence = 10;
  armor = 10;
  stamina = 10;
  accuracy = 10;
  maxHP = 100;
  maxMana = 100;
  hpRegen = 10;
  manaRegen = 10;

  constructor(pClass: Class, Race: Race, name?: String) {
    if (name) this.name = name;
    this.pClass = pClass;
    this.race = Race;
    for (const key in this.pClass.bonus) {
      const typedKey = key as keyof CharStats;
      const bonusValue = this.pClass.bonus[typedKey];
      if (bonusValue) {
        this[typedKey] = bonusValue + this[typedKey];
      }
    }

    for (const key in this.race.bonus) {
      const typedKey = key as keyof CharStats;
      const bonusValue = this.race.bonus[typedKey];
      if (bonusValue) {
        this[typedKey] = bonusValue + this[typedKey];
      }
    }
  }
}

export default Character;
