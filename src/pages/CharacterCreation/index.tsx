import styles from "./styles.module.scss";

import CharacterOptions from "../../modules/CharacterOptions";

function CharacterCreation() {
  return (
    <div className={styles.page}>
      <CharacterOptions />
    </div>
  );
}

export default CharacterCreation;
