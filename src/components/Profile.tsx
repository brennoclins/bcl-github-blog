import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import styles from "./profile.module.css";
import { useGithub } from "../hooks/useGithub";

export function Profile() {
  const { user } = useGithub()
 
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
