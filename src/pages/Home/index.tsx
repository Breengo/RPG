import styles from "./styles.module.scss";
import CharacterInfo from "../../modules/CharacterInfo";
import BattleInfo from "../../modules/BattleInfo";
import EnemyInfo from "../../modules/EnemyInfo";

const Home = () => {
  return (
    <div className={styles.page}>
      <EnemyInfo />
      <BattleInfo />
      <CharacterInfo />
    </div>
  );
};

export default Home;
