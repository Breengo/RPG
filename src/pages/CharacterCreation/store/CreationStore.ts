import { makeAutoObservable } from "mobx";
import { CLASSES, Class, RACES, Race } from "../../../data";
import Character from "../../../helpers/Character";

class creationStore {
  class: Class = CLASSES[0];
  race: Race = RACES[0];
  name: string = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setClass(value: Class) {
    this.class = value;
  }

  setRace(value: Race) {
    this.race = value;
  }

  setName(value: string) {
    this.name = value;
  }

  getData() {
    return new Character(this.class, this.race, this.name);
  }
}

export default new creationStore();
