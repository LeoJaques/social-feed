import styles from './Sidebar.module.css'
import {PencilLine} from  '@phosphor-icons/react'
  
export function Sidebar(){
    return (
        <>
            <aside className={styles.sidebar}>
                <img  
                src='https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>


                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/LeoJaques.png"  />
                    <strong>Leonardo Jaques</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#"> 
                    <PencilLine size={20} /> 
                    Editar seu perfil</a>
                </footer>
            </aside>
        </>
    )
}