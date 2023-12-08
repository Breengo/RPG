import React from "react";
import ChoicePicker from "./components/ChoicePicker";
import styles from "./styles.module.scss";
import { CLASSES, RACES } from "../../data";

function CharacterOptions() {
  const [race, setRace] = React.useState(1);
  const [pClass, setpClass] = React.useState(3);

  return (
    <div className={styles.container}>
      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Name</p>
        <input className={styles.nameInput} type="text" />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Race</p>
        <ChoicePicker choiceList={RACES} picked={race} setPicked={setRace} />
      </div>

      <div className={styles.propertyContainer}>
        <p className={styles.propertyName}>Class</p>
        <ChoicePicker
          choiceList={CLASSES}
          picked={pClass}
          setPicked={setpClass}
        />
      </div>

      <button className={styles.createBtn}>Create</button>
    </div>
  );
}

export default CharacterOptions;
