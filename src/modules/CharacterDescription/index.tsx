import { observer } from "mobx-react-lite";
import CharacterData from "../../store/store";
import styles from "./styles.module.scss";

const CharacterDescription = observer(() => {
  const data = CharacterData;

  return (
    <div className={styles.container}>
      <p className={styles.header}>{data.race.name}</p>
      <p className={styles.text}>{data.race.description}</p>
      <p className={styles.header}>{data.class.name}</p>
      <p className={styles.text}>{data.class.description}</p>
    </div>
  );
});
export default CharacterDescription;
