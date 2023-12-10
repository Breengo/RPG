import styles from "./styles.module.scss";
import CharacterInfo from "../../modules/CharacterInfo";
import WorldMap from "../../modules/WorldMap";

const Home = () => {
  return (
    <div className={styles.page}>
      <div></div>
      <WorldMap />
      <CharacterInfo />
    </div>
  );
};

export default Home;
