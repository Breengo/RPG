import styles from "./styles.module.scss";

import CharactersStore from "../../store/store";
import CharacterOptions from "../../modules/CharacterOptions";
import CharacterDescription from "../../modules/CharacterDescription";
import CharacterStats from "../../modules/CharacterStats";

function CharacterCreation() {
  CharactersStore.createChar();

  return (
    <div className={styles.page}>
      <CharacterDescription />
      <CharacterOptions />
      <CharacterStats />
    </div>
  );
}

export default CharacterCreation;
