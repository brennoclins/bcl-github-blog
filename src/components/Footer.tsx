import { Copyright } from "phosphor-react";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Copyright /> Desenvolvido por Brenno C. Lins
    </footer>
  );
}
