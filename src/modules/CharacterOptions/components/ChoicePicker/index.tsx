import { CLASSES, RACES } from "../../../../data";
import styles from "./styles.module.scss";

interface Props {
  choiceList: typeof RACES | typeof CLASSES;
  picked: number;
  setPicked: (choice: number) => void;
}

function ChoicePicker({ choiceList, setPicked, picked }: Props) {
  return (
    <ul className={styles.container}>
      {choiceList.map((choice, index) => (
        <li
          key={index}
          onClick={() => setPicked(index)}
          className={picked === index ? styles.active : ""}
        >
          {choice.name}
        </li>
      ))}
    </ul>
  );
}

export default ChoicePicker;
