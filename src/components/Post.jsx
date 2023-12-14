import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import './Post.module.css'
import styles from './Post.module.css'

export function Post({ autor, conteudo, dataPublicacao }) {

    const formatDate = format(dataPublicacao, "dd 'de' MMMM yyyy 'às' HH:mm'h'", { locale: ptBR })

    const publicationTime = formatDistanceToNow(dataPublicacao, {
        addSuffix: true,
        locale: ptBR
    })
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar url={autor.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{autor.name}</strong>
                        <span>{autor.role}</span>
                    </div>
                </div>

                <time title={formatDate} dateTime={dataPublicacao.toISOString()}> Públicado {publicationTime}</time>
            </header>

            <main className={styles.content}>
                {conteudo.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>

                    }
                })}


            </main>

            <footer>
                <form className={styles.commentForm}>

                    <strong>Deixe deu feedback</strong>

                    <textarea
                        placeholder='Escreva um comentário' />

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
