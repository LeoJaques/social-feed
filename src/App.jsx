import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './components/App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor=' Leonardo'
            conteudo='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, hic debitis commodi eaque sapiente'
          />

          <Post
            autor='Leticia'
            conteudo='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, hic debitis commodi eaque sapiente'
          />
        </main>
      </div>
    </>
  )
}

