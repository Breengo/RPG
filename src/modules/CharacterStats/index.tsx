import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import CreationStore from "../../pages/CharacterCreation/store/CreationStore";

const CharacterStats = observer(() => {
  const data = CreationStore.getData();

  return (
    <div className={styles.container}>
      <p>
        Agile: <span>{data.agile}</span>
      </p>
      <p>
        Strength: <span>{data.strength}</span>
      </p>
      <p>
        Intelligence: <span>{data.intelligence}</span>
      </p>
      <p>
        Armor: <span>{data.armor}</span>
      </p>
      <p>
        Stamina: <span>{data.stamina}</span>
      </p>
      <p>
        Accuracy: <span>{data.accuracy}</span>
      </p>
      <p>
        HP: <span>{data.HP}</span>
      </p>
      <p>
        Mana: <span>{data.mana}</span>
      </p>
      <p>
        HP Regen: <span>{data.hpRegen}</span>
      </p>
      <p>
        Mana Regen: <span>{data.manaRegen}</span>
      </p>
    </div>
  );
});
export default CharacterStats;
