import { Link } from "react-router-dom"
import styles from "./notfound.module.css"
import { ArrowFatLeft } from "phosphor-react"

export function NotFound() {
  return (
    <section className={styles.notfound}>

    <div className={styles.notfoundInfo}>
      <h2>Ops!</h2>
      <h1>Página não encontrada</h1>
      <Link to={'/'}>
      <ArrowFatLeft size={44} color="#ff7b00" weight="fill" />
         Voltar para Home
      </Link>
    </div>

    <div className={styles.wrapper}>
      {/* <div className="t" style={{ ['--i' as string]: 1 }}></div>
      <div className="t" style={{ ['--i' as string]: 2 }}></div> */}
            
      <div className={styles.t} style={{ '--i': 11 }}></div>
      <div className={styles.t} style={{ '--i': 12 }}></div>
      <div className={styles.t} style={{ '--i': 13 }}></div>
      <div className={styles.t} style={{ '--i': 14 }}></div>
      <div className={styles.t} style={{ '--i': 15 }}></div>
      <div className={styles.t} style={{ '--i': 16 }}></div>
      <div className={styles.t} style={{ '--i': 17 }}></div>
      <div className={styles.t} style={{ '--i': 18 }}></div>
      <div className={styles.t} style={{ '--i': 19 }}></div>
      <div className={styles.t} style={{ '--i': 20 }}></div>
    </div>
    </section>
  )
}