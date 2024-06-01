"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.app}>
      <div className={styles.toolbar}>
        <h1 className={styles.title}>Pokemon TCG</h1>
        <div>
        <Link href="/">
            <button>tcg</button>
          </Link>
          <Link href="/duel">
            <button>Duel</button>
          </Link>
          <Link href="https://react-pokedex-rho.vercel.app/" target="_blank">
            <button>Pokedex</button>
          </Link>
          
        </div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </nav>
  );
};

export default Navbar;
