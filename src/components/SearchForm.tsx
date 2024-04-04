import styles from "./search-form.module.css";
import { useGithub } from "../hooks/useGithub";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { FormEvent, useEffect, useState } from "react";

type Issues = {
  body: string;
  title: string;
  updated_at: Date;
  created_at: Date;
  number: number;
};

interface Post extends Array<Issues> {}

export function SearchForm() {
  const { issues } = useGithub();
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<Post>(issues);

  // function handleFilterPosts(event:ChangeEvent<HTMLTextAreaElement>) {
  //   setSearchText(event.target.value);
  // }

  function handleSearchPost(event: FormEvent) {
    event.preventDefault();

    const postsFilted = issues.filter((post) =>
      post.title.includes(searchText)
    );
    if (postsFilted.length === 0) {
      alert(`Termo não encontrado: ${searchText}`)
    } else {
      setPosts(postsFilted);
    }

    // console.log({
    //   'Issues': issues,
    //   'posts': posts,
    //   'postsFilter': postsFilted

    // });
  }

  useEffect(() => {
    if (posts.length === 0) setPosts(issues);
  }, [issues, posts]);

  return (
    <main className={styles.searchForm}>
      <form onSubmit={handleSearchPost}>
        <div className={styles.searchFormTitle}>
          <h2>Publicações</h2>
          <span>
            {`${posts.length} ${
              posts.length === 1 ? "Publicação" : "Publicações"
            }`}
          </span>
        </div>

        <input
          className={styles.searchFormInput}
          type="text"
          placeholder="Buscar conteúdo"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      <section className={styles.postCardConainer}>
        {posts.map((post) => {
          const updatedAtDateFormatted = format(
            post.updated_at,
            "d 'de' LLLL 'ás' HH:mm'h'",
            { locale: ptBR }
          );
          const updatedAtDateRelativeToNow = formatDistanceToNow(
            post.updated_at,
            { locale: ptBR, addSuffix: true }
          );

          return (
            <div key={post.number} className={styles.postCard}>
              <div className={styles.postCardHeader}>
                <h4 className={styles.postCardTitle}>{post.title}</h4>
                <span>
                  <time title={updatedAtDateFormatted}>
                    {updatedAtDateRelativeToNow}
                  </time>
                </span>
              </div>

              <p className={styles.postCardText}>{post.body}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
