import CharsStore from "../../store/charsStore";
import styles from "./styles.module.scss";

const CharacterInfo = () => {
  const charData = CharsStore.getChar();
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>{charData.name}</p>
        <p className={styles.health}>
          {charData.HP}/{charData.HP}
        </p>
        <p className={styles.mana}>
          {charData.mana}/{charData.mana}
        </p>
      </div>
      <div className={styles.main}>
        <p>{charData.LVL} LVL</p>
        <p className={styles.exp}>
          {charData.mana}/{charData.mana}
        </p>
      </div>
      <div className={styles.stats}>
        <p>
          Race: <span>{charData.race.name}</span>
        </p>
        <p>
          Class: <span>{charData.pClass.name}</span>
        </p>
        <p>
          Agile: <span>{charData.agile}</span>
        </p>
        <p>
          Strength: <span>{charData.strength}</span>
        </p>
        <p>
          Intelligence: <span>{charData.intelligence}</span>
        </p>
        <p>
          Armor: <span>{charData.armor}</span>
        </p>
        <p>
          Stamina: <span>{charData.stamina}</span>
        </p>
        <p>
          Accuracy: <span>{charData.accuracy}</span>
        </p>
        <p>
          Max HP: <span>{charData.HP}</span>
        </p>
        <p>
          Max mana: <span>{charData.mana}</span>
        </p>
        <p>
          HP regen: <span>{charData.hpRegen}</span>
        </p>
        <p>
          Mana regen: <span>{charData.manaRegen}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterInfo;
