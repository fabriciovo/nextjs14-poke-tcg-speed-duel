"use client";
import { createContext } from "react";
import styles from "./navbar.module.css";


const Navbar = () => {
  return (
    <nav className={styles.app}>
      <div className={styles.toolbar}>
        <h1 className={styles.title}>Pokemon TCG</h1>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </nav>
  );
};

export default Navbar;
