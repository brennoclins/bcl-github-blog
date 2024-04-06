import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.imageL} src="/effect-L.svg" alt="" />
      <img className={styles.logo} src="/logo.svg" alt="" />
      <img className={styles.imageR} src="/effect-R.svg" alt="" />
    </header>
  );
}
