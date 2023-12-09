import { makeAutoObservable } from "mobx";
import { Class, Race } from "../data";
import Character from "../helpers/Character";

class CharsStore {
  charList: Character[] = [];
  currentChar: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getChar() {
    return this.charList[this.currentChar];
  }

  createChar(pClass: Class, race: Race, name: String) {
    this.charList.push(new Character(pClass, race, name));
    this.currentChar = this.charList.length - 1;
  }
}

export default new CharsStore();
