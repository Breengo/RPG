import { makeAutoObservable } from "mobx";
import { CLASSES, Class, RACES, Race } from "../data";
import Character from "../helpers/Character";

class CharactersStore {
  charList: Character[] = [];
  currentChar: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setClass(value: Class) {
    const data = this.charList[this.currentChar];
    this.charList[this.currentChar] = new Character(value, data.race);
  }

  setRace(value: Race) {
    const data = this.charList[this.currentChar];
    this.charList[this.currentChar] = new Character(data.pClass, value);
  }

  getChar() {
    return this.charList[this.currentChar];
  }

  createChar() {
    this.charList.push(new Character(CLASSES[0], RACES[0]));
    this.currentChar = this.charList.length - 1;
  }
}

export default new CharactersStore();
