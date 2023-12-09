import styles from "./styles.module.scss";

import CharacterOptions from "../../modules/CharacterOptions";
import CharacterDescription from "../../modules/CharacterDescription";
import CharacterStats from "../../modules/CharacterStats";

function CharacterCreation() {
  return (
    <div className={styles.page}>
      <CharacterDescription />
      <CharacterOptions />
      <CharacterStats />
    </div>
  );
}

export default CharacterCreation;
