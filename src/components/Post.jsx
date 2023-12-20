import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import './Post.module.css'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, content, publishedAt }) {

    const formatDate = format(publishedAt, "dd 'de' MMMM yyyy 'às' HH:mm'h'", { locale: ptBR })

    const publicationTime = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBR
    })

    const [comments, setComment] = useState([])

    function handleCreateNewComment() {
        event.preventDefault()
        
        const newComments = [...comments, "New Comment"];

        setComment(newComments);

    }

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar url={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={formatDate} dateTime={publishedAt.toISOString()}> Públicado {publicationTime}</time>
            </header>

            <main className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>

                    }
                })}


            </main>

            <footer>
                
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                    <strong>Deixe deu feedback</strong>

                    <textarea
                        placeholder='Escreva um comentário' />

                    <div className={styles.commentButton}>
                        <button type="submit">Publicar</button>
                    </div>
                </form>
            </footer>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}

            </div>
        </article>
    )
}
