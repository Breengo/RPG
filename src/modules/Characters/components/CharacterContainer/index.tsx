import Character from "../../../../helpers/Character";
import styles from "./styles.module.scss";

interface Props {
  data: Character;
}

function CharacterContainer({ data }: Props) {
  return (
    <div className={styles.container}>
      <p>{data.name}</p>
      <p>{data.LVL} LVL</p>
      <p>{data.race.name}</p>
      <p>{data.pClass.name}</p>
    </div>
  );
}

export default CharacterContainer;
