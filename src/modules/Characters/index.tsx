import CharacterContainer from "./components/CharacterContainer";
import CreateCharacter from "./components/CreateCharacter";
import CharactersStore from "../../store/charsStore";
import styles from "./styles.module.scss";

function Characters() {
  const chars = CharactersStore.charList;
  return (
    <div className={styles.table}>
      {chars.map((charData, index) => (
        <CharacterContainer data={charData} key={index} />
      ))}
      <CreateCharacter />
    </div>
  );
}
export default Characters;
