import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (

        <article className={styles.comment}>
            {/* <img src="https://github.com/LeoJaques.png" /> */}
            <Avatar hasBorder={false} url='https://github.com/maykbrito.png' />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Mayk Brito</strong>
                            <time title='11 de dezembro de 2023 ás 16:03' dateTime='2023-12-11 16:03'>Cerca de 2h átras</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p className={styles.commentText}> 
                    Muito bom Devon, parabéns!! 👏👏
                    </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                    Aplaudir
                    </button>
                    <span>33</span>
                </footer>
            </div>
        </article>
    )
}