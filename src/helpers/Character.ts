import { CLASSES, CharStats, Class, RACES, Race } from "../data";

class Character {
  agile = 10;
  strength = 10;
  intelligence = 10;
  armor = 10;
  stamina = 10;
  accuracy = 10;
  HP = 100;
  mana = 100;
  hpRegen = 10;
  manaRegen = 10;

  pClass = CLASSES[0];
  race = RACES[0];

  constructor(pClass: Class, Race: Race) {
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
