import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";

import styles from "./post.module.css";
import { useParams } from "react-router-dom";
import { useGithub } from "../hooks/useGithub";
import Markdown from "react-markdown";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

// type Post = {
//   number: number
//   title: string
//   body: string
//   html_url: string
//   updated_at: string

//   comments: number
//   user: {
//     login: string
//     avatar_url: string
//     html_url: string
//   }
// }

export function Post() {
  const { issues } = useGithub();
  const { id } = useParams();

  const post = issues.find((post) => post.number === Number(id));

  if (!post) {
    return;
  }

  const updatedAtDateFormatted = format(
    post.updated_at,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );
  const updatedAtDateRelativeToNow = formatDistanceToNow(post.updated_at, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <main className={styles.post}>
      <section className={styles.postHeader}>
        <div className={styles.postHeaderButtons}>
          <a href="/">
            <CaretLeft size={22} /> VOLTAR
          </a>
          <a href={post.html_url} target="_blank" rel="noopener noreferrer">
            VER NO GITHUB <ArrowSquareOut size={22} />
          </a>
        </div>

        <h2 className={styles.postHeaderTitle}>{post.title}</h2>

        <div className={styles.postHeaderTags}>
          <span>
            <GithubLogo size={22} /> {post.user.login}
          </span>
          <span>
            <CalendarBlank size={22} />
            <time title={updatedAtDateFormatted}>
              {updatedAtDateRelativeToNow}
            </time>
          </span>
          <span>
            <ChatCircle size={22} />
            {post.comments === 1
              ? `${post.comments} comentário`
              : `${post.comments} comentários`}
          </span>
        </div>
      </section>

      <section className={styles.postContent}>
        <Markdown>{post.body}</Markdown>
      </section>
    </main>
  );
}
