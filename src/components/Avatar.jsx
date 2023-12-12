import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, url}){
    return (
        <img className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} src={url}/>
    ) 
}