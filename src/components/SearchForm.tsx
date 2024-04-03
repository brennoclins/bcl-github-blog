import styles from "./search-form.module.css";

export function SearchForm() {
  return (
    <main className={styles.searchForm}>
      <form>
        <div className={styles.searchFormTitle}>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <input className={styles.searchFormInput} type="text" placeholder="Buscar conteúdo" />
      </form>

      <section className={styles.postCardConainer}>
        <div className={styles.postCard}>
          <div className={styles.postCardHeader}>
            <h4 className={styles.postCardTitle}>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            accusamus necessitatibus vero molestiae est, voluptatibus sint
            obcaecati recusandae, veritatis, amet dolor? Nobis atque deserunt
            cumque quia asperiores qui nesciunt labore.
          </p>
        </div>

        <div className={styles.postCard}>
          <div className={styles.postCardHeader}>
            <h4 className={styles.postCardTitle}>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            accusamus necessitatibus vero molestiae est, voluptatibus sint
            obcaecati recusandae, veritatis, amet dolor? Nobis atque deserunt
            cumque quia asperiores qui nesciunt labore.
          </p>
        </div>

        <div className={styles.postCard}>
          <div className={styles.postCardHeader}>
            <h4 className={styles.postCardTitle}>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            accusamus necessitatibus vero molestiae est, voluptatibus sint
            obcaecati recusandae, veritatis, amet dolor? Nobis atque deserunt
            cumque quia asperiores qui nesciunt labore.
          </p>
        </div>
      </section>
    </main>
  );
}
