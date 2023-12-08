import styles from "./styles.module.scss";

function CharacterStats() {
  return (
    <div className={styles.container}>
      <p>
        Agile: <span>32</span>
      </p>
      <p>
        Strength: <span>32</span>
      </p>
      <p>
        Intelligence: <span>32</span>
      </p>
      <p>
        Armor: <span>32</span>
      </p>
      <p>
        Stamina: <span>32</span>
      </p>
      <p>
        Accuracy: <span>32</span>
      </p>
      <p>
        HP: <span>32</span>
      </p>
      <p>
        Mana: <span>32</span>
      </p>
      <p>
        HP Regen: <span>32</span>
      </p>
      <p>
        Mana Regen: <span>32</span>
      </p>
    </div>
  );
}

export default CharacterStats;
