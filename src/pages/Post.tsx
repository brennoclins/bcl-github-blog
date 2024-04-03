import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";

import styles from "./post.module.css";

export function Post() {
  return (
    <main className={styles.post}>
      <section className={styles.postHeader}>
        <div className={styles.postHeaderButtons}>
          <a href="/">
            <CaretLeft size={22} /> VOLTAR
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            VER NO GITHUB <ArrowSquareOut size={22} />
          </a>
        </div>

        <h2 className={styles.postHeaderTitle}>JavaScript data types</h2>

        <div className={styles.postHeaderTags}>
          <span>
            <GithubLogo size={22} /> brennoclins
          </span>
          <span>
            <CalendarBlank size={22} /> Há 1 dia
          </span>
          <span>
            <ChatCircle size={22} /> 5 comentários
          </span>
        </div>
      </section>

      <section className={styles.postContent}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          vero, obcaecati nihil officiis voluptatem a odit nisi corporis ut sint
          voluptas magni! Dolore totam, alias eos debitis nostrum deserunt
          recusandae!
        </p>
      </section>
    </main>
  );
}
