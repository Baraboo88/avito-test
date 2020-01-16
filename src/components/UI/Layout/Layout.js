import React from "react";
import Auxil from "../Auxil/Auxil";
import styles from "./Layout.module.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Auxil>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </Auxil>
);

export default layout;
