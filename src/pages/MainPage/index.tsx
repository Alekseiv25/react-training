import { useEffect, useState } from 'react'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../../store/github/github.api'
import styles from './styles.module.scss'
import { useDebounce } from '../../hooks/debounce'
import { UserCard } from '../../components/UserCard'
import { ReposCard } from '../../components/ReposCard'

export const MainPage = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const [dropdown, setDropdown] = useState(false)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()


    useEffect(() => {
        console.log(debounced)
        debounced.length ? setDropdown(true) : setDropdown(false)

    }, [debounced])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return (
        <div className={styles.container}>
            {isError && <p>error</p>}


            <div className={styles.dropdownContainer}>
                <input
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {dropdown && <div className={styles.dropdown}>
                    {isLoading && <p>loading</p>}
                    {data?.map(user =>
                        <UserCard onClick={clickHandler} key={user.id} user={user} />)}
                </div>}
            </div>
            <div className={styles.reposContainer}>
                {areReposLoading && <p>Loading</p>}
                {repos?.map(repo => <ReposCard repo={repo} key={repo.id} />)}
            </div>
        </div >
    )
}