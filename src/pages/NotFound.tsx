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
      {/* <div className="t" style={{ '--i': 1 }}></div> */}
            
      <div className={styles.t} style={{ ['--i' as string]: 11 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 12 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 13 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 14 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 15 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 16 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 17 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 18 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 19 }}></div>
      <div className={styles.t} style={{ ['--i' as string]: 20 }}></div>
    </div>
    </section>
  )
}
