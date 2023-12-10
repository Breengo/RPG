import { makeAutoObservable } from "mobx";
import { Class, Race } from "../data";
import Character from "../helpers/Character";

class CharsStore {
  charList: Character[] = [];
  currentChar: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    const storageData = localStorage.getItem("charList");
    if (storageData) {
      this.charList = JSON.parse(storageData);
    }
  }

  getChar() {
    return this.charList[this.currentChar];
  }

  setCurrent(name: String) {
    this.currentChar = this.charList.findIndex((char) => char.name === name);
  }

  createChar(pClass: Class, race: Race, name: String) {
    this.charList.push(new Character(pClass, race, name));
    this.currentChar = this.charList.length - 1;
    localStorage.setItem("charList", JSON.stringify(this.charList));
  }
}

export default new CharsStore();
