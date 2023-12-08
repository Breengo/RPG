import { CLASSES, Class, RACES, Race } from "../../../../data";
import styles from "./styles.module.scss";

interface Props {
  choiceList: typeof RACES | typeof CLASSES;
  picked: Class | Race;
  setPicked: (choice: Class | Race) => void;
}

function ChoicePicker({ choiceList, setPicked, picked }: Props) {
  return (
    <ul className={styles.container}>
      {choiceList.map((choice, index) => (
        <li
          key={index}
          onClick={() => setPicked(choice)}
          className={picked.name === choice.name ? styles.active : ""}
        >
          {choice.name}
        </li>
      ))}
    </ul>
  );
}

export default ChoicePicker;
