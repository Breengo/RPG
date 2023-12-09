import ChoicePicker from "./components/ChoicePicker";
import styles from "./styles.module.scss";
import { CLASSES, RACES } from "../../data";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import CharsStore from "../../store/CharsStore";
import CreationStore from "../../pages/CharacterCreation/store/CreationStore";

const CharacterOptions = observer(() => {
  const creatStore = CreationStore;
  const charData = CreationStore.getData();
  const charsStore = CharsStore;

  const navigate = useNavigate();

  function onCreation() {
    charsStore.createChar(charData.pClass, charData.race, charData.name);
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Name</p>
        <input
          onChange={(e) => creatStore.setName(e.target.value)}
          className={styles.nameInput}
          type="text"
        />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Race</p>
        <ChoicePicker
          choiceList={RACES}
          picked={charData.race}
          setPicked={creatStore.setRace}
        />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Class</p>
        <ChoicePicker
          choiceList={CLASSES}
          picked={charData.pClass}
          setPicked={creatStore.setClass}
        />
      </div>

      <button onClick={onCreation} className={styles.createBtn}>
        Create
      </button>
    </div>
  );
});

export default CharacterOptions;
