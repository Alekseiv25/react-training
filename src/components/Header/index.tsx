import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.link} to={'/'}>Main</Link>
            <Link className={styles.link} to={'/favourites'}>Favourites</Link>
        </header>
    )
}