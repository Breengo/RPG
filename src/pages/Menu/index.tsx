import styles from "./index.module.scss";

import Characters from "../../modules/Characters";

function Menu() {
  return (
    <div className={styles.page}>
      <Characters />
    </div>
  );
}

export default Menu;
