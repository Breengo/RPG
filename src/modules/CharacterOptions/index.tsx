import ChoicePicker from "./components/ChoicePicker";
import styles from "./styles.module.scss";
import { CLASSES, RACES } from "../../data";
import CharacterData from "../../store/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const CharacterOptions = observer(() => {
  const characterStore = CharacterData;
  const charData = CharacterData.getChar();

  const navigate = useNavigate();

  function onCreation() {
    navigate("/home");
  }

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
          picked={charData.race}
          setPicked={characterStore.setRace}
        />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Class</p>
        <ChoicePicker
          choiceList={CLASSES}
          picked={charData.pClass}
          setPicked={characterStore.setClass}
        />
      </div>

      <button onClick={onCreation} className={styles.createBtn}>
        Create
      </button>
    </div>
  );
});

export default CharacterOptions;
