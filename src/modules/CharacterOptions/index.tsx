import ChoicePicker from "./components/ChoicePicker";
import styles from "./styles.module.scss";
import { CLASSES, RACES } from "../../data";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import CharsStore from "../../store/CharsStore";
import CreationStore from "../../pages/CharacterCreation/store/CreationStore";
import React from "react";

const CharacterOptions = observer(() => {
  const [error, setError] = React.useState("");

  const creatStore = CreationStore;
  const charData = CreationStore.getData();
  const charsStore = CharsStore;

  const navigate = useNavigate();

  function onCreation() {
    setError("");
    const alreadyExists = charsStore.charList.find(
      (char) => char.name === charData.name
    );
    if (alreadyExists) return setError("This name already taken");
    if (charData.name === "") return setError("Fill name field");
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
        <p className={styles.error}>{error}</p>
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
