import { observer } from "mobx-react-lite";
import CharacterData from "../../store/store";
import styles from "./styles.module.scss";

const CharacterDescription = observer(() => {
  const data = CharacterData.getChar();

  return (
    <div className={styles.container}>
      <p className={styles.header}>{data.race.name}</p>
      <p className={styles.text}>{data.race.description}</p>
      <p className={styles.header}>{data.pClass.name}</p>
      <p className={styles.text}>{data.pClass.description}</p>
    </div>
  );
});
export default CharacterDescription;
