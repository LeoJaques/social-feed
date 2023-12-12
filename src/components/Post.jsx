import { Avatar } from './Avatar'
import { Comment } from './Comment'
import './Post.module.css'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar url="https://github.com/LeoJaques.png" />
                    <div className={styles.authorInfo}>
                        <strong>Leonardo Jaques</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                    <time title='10 de dezembro 2023 ás 16:01' dateTime='2023-12-10 16:05'>Publicado há 1h</time>
            </header>

            <main className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a></p>{' '}

            </main>

            <footer>
                <form className={styles.commentForm}>

                <strong>Deixe deu feedback</strong>

                <textarea 
                placeholder='Escreva um comentário'/>   

                <div className={styles.commentButton}>
                    <button type="submit">Publicar</button>    
                </div>         
                </form>
            </footer>

            <div className={styles.commentList}>
                <Comment />

            </div>
        </article>
    )
}
