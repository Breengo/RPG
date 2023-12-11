import { makeAutoObservable } from "mobx";
import Mob from "../../../helpers/Mob";

interface Enemy extends Mob {
  id: number;
  currentHP: number;
  currentMana: number;
}

class battleStore {
  enemyList: Enemy[] = [];
  current = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addEnemy(mob: Mob) {
    const enemy = {
      ...mob,
      id: this.current,
      currentHP: mob.maxHP,
      currentMana: mob.maxMana,
    };
    this.current++;
    this.enemyList.push(enemy);
  }

  dealDamage(eid: number, damage: number) {
    this.enemyList[eid].currentHP -= damage;
  }
}

export default new battleStore();
