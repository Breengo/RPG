import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import CreationStore from "../../pages/CharacterCreation/store/CreationStore";

const CharacterDescription = observer(() => {
  const data = CreationStore.getData();

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
