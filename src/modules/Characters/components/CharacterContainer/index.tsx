import { Link } from "react-router-dom";
import Character from "../../../../helpers/Character";
import styles from "./styles.module.scss";
import CharsStore from "../../../../store/charsStore";

interface Props {
  data: Character;
}

function CharacterContainer({ data }: Props) {
  const charsStore = CharsStore;

  return (
    <Link
      onClick={() => charsStore.setCurrent(data.name)}
      to="/home"
      className={styles.container}
    >
      <p>{data.name}</p>
      <p>{data.LVL} LVL</p>
      <p>{data.race.name}</p>
      <p>{data.pClass.name}</p>
    </Link>
  );
}

export default CharacterContainer;
