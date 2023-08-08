import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.scss';

export const FavouritesPage = () => {

    const { favourites } = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p>No items.</p>

    return (
        <div className={styles.container}>
            {favourites.map(f => (
                <div key={f.id}>
                    <a href={f.html_url}>{f.html_url}</a>
                    <span>{f.full_name}</span>
                </div>
            ))}
        </div>
    )
}