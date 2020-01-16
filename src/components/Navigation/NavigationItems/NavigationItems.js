import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/">Объявдения</NavigationItem>
  </ul>
);
export default navigationItems;
