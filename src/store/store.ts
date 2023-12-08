import { makeAutoObservable } from "mobx";
import { CLASSES, Class, RACES, Race } from "../data";

class CharacterData {
  class: Class = CLASSES[0];
  race: Race = RACES[0];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setClass(value: Class) {
    this.class = value;
  }

  setRace(value: Race) {
    this.race = value;
  }
}

export default new CharacterData();
