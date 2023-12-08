import ChoicePicker from "./components/ChoicePicker";
import styles from "./styles.module.scss";
import { CLASSES, RACES } from "../../data";
import CharacterData from "../../store/store";
import { observer } from "mobx-react-lite";

const CharacterOptions = observer(() => {
  const characterData = CharacterData;

  return (
    <div className={styles.container}>
      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Name</p>
        <input className={styles.nameInput} type="text" />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Race</p>
        <ChoicePicker
          choiceList={RACES}
          picked={characterData.race}
          setPicked={characterData.setRace}
        />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Class</p>
        <ChoicePicker
          choiceList={CLASSES}
          picked={characterData.class}
          setPicked={characterData.setClass}
        />
      </div>

      <button className={styles.createBtn}>Create</button>
    </div>
  );
});

export default CharacterOptions;
