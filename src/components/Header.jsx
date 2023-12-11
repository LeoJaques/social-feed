import styles from './Header.module.css'
import logo from '../assets/ignite-simbol.svg'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                <strong >Ignite Feed</strong>
            </header>
        </>
    )
}