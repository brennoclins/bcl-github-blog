import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'
import styles from './home.module.css'

export function Home() {
  return (
    <main className={styles.home}>
      <Profile />
      <SearchForm />
    </main>
  )
}