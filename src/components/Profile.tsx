import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import styles from "./profile.module.css";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

type User = {
  id: number;
  login: string;
  name: string;
  bio: string | null;
  company: string | null;
  avatar_url: string;
  email: string | null;
  followers: number;
  following: number;
  html_url: string;
};

export function Profile() {
  const [user, setUser] = useState<User | null>(null);

  async function getUser(username: string) {
    const response = await api.get<User>(`users/${username}`);
    const {
      id,
      login,
      name,
      bio,
      company,
      avatar_url,
      email,
      followers,
      following,
      html_url,
    } = response.data;

    setUser({
      id,
      login,
      name,
      bio,
      company,
      avatar_url,
      email,
      followers,
      following,
      html_url,
    });
  }

  useEffect(() => {
    getUser("zenorocha");
  }, []);

  return (
    <section className={styles.profile}>
      <div className={styles.profileAvatar}>
        <img src={user?.avatar_url} alt="" />
      </div>

      <div className={styles.profileContent}>
        <section className={styles.profileTitle}>
          <h1>{user?.name}</h1>
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
            <ArrowSquareOut size={18} />
          </a>
        </section>

        <section className={styles.profileDescription}>
          <p>
            {user?.bio}
          </p>
        </section>

        <section className={styles.profileTags}>
          <span>
            <GithubLogo size={26} /> {user?.login}
          </span>
          <span>
            <Buildings size={26} /> {user?.company}
          </span>
          <span>
            <Users size={26} /> {user?.followers} seguidores
          </span>
        </section>
      </div>
    </section>
  );
}
