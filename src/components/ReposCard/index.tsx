import { useState } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { IRepo } from '../../models/models'
import styles from './styles.module.scss'

export const ReposCard = ({ repo }: { repo: IRepo }) => {

    const { addFavourite, removeFavourite } = useActions()
    const { favourites } = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repo))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(repo)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo)
        setIsFav(false)
    }

    return (
        <div className={styles.repoContainer}>
            <a href={repo.html_url} target='_blank'>
                <h3>{repo.full_name}</h3>
                <p>{repo.url}</p>
                <span >{repo?.visibility}</span>


            </a>
            {!isFav && <button onClick={addToFavourite}>Add</button>}
            {isFav && <button onClick={removeFromFavourite}>Remove</button>}
        </div>
    )
}