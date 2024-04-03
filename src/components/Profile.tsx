import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react"
import styles from "./profile.module.css"

export function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.profileAvatar}>
        <img src="https://github.com/brennoclins.png" alt="" />
      </div>

      <div className={styles.profileContent}>
        <section className={styles.profileTitle}>
          <h1>Brenno C. Lins</h1>
          <a href="https://github.com/brennoclins" target="_blank" rel="noopener noreferrer">
            GITHUB
            <ArrowSquareOut size={18} />
          </a>
        </section>

        <section className={styles.profileDescription}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam illo aliquid, sed iusto, neque dolor rerum dignissimos excepturi repellendus officia incidunt eius minima praesentium ipsam quos esse velit aspernatur.</p>
        </section>

        <section className={styles.profileTags}>
          <span><GithubLogo size={26}/> brennoclins</span>
          <span><Buildings size={26} /> BCL-ST</span>
          <span><Users size={26} /> 53 seguidores</span>
        </section>
      </div>
    </section>
  )
}