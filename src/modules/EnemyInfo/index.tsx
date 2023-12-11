import EnemyBox from "./components/EnemyBox/EnemyBox";
import styles from "./styles.module.scss";

const EnemyInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Alive: <span>5</span>
      </div>
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
      <EnemyBox />
    </div>
  );
};

export default EnemyInfo;
