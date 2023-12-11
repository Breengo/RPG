type Attribute = Omit<Mob, "name,LVL">;

class Mob {
  name: String = "";
  mainAttribs: Partial<Attribute> = {};

  LVL = 1;
  agile = 1;
  strength = 1;
  intelligence = 1;
  armor = 1;
  stamina = 1;
  accuracy = 1;
  maxHP = 1;
  maxMana = 1;
  hpRegen = 1;
  manaRegen = 1;

  constructor(name: String, LVL: number, mainAttribs: Partial<Attribute>) {
    this.name = name;
    this.LVL = LVL;
    this.mainAttribs = mainAttribs;
    for (const atr in mainAttribs) {
      const typedAtr = atr as keyof typeof this;
      this[typedAtr] = (this.LVL * 2) as any;
    }
  }
}

export default Mob;
