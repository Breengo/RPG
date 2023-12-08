import CharacterContainer from "./components/CharacterContainer";
import CreateCharacter from "./components/CreateCharacter";
import styles from "./styles.module.scss";

function Characters() {
  return (
    <div className={styles.table}>
      <CharacterContainer />
      <CharacterContainer />
      <CharacterContainer />
      <CreateCharacter />
    </div>
  );
}
export default Characters;
