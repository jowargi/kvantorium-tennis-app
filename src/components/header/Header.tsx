import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TENNIS STORE</h1>
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/rackets">Ракетки</Link>
      </nav>
    </header>
  );
};

export default Header;
