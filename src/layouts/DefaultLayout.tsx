import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

import styles from './default-layout.module.css'

export function DefaultLayout() {
  return (
    <header className={styles.layout}>
      <Header />
      <section className={styles.layoutContainer}>
      <Outlet />
      </section>
    </header>
  )
}