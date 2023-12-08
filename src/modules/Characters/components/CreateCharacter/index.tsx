import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function CreateCharacter() {
  return (
    <Link to="/create" className={styles.container}>
      Create new character
    </Link>
  );
}

export default CreateCharacter;
