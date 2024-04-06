import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

import styles from "./default-layout.module.css";
import { Footer } from "../components/Footer";

export function DefaultLayout() {
  return (
    <main className={styles.layout}>
      <Header />
      
      <section className={styles.layoutContainer}>
        <Outlet />
      </section>

      <Footer />
    </main>
  );
}
