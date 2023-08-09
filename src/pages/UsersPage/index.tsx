
import { Navigate } from "react-router-dom"
import { useActions } from "../../hooks/actions"
import { useAppSelector } from "../../hooks/redux"
import { useGetUsersQuery, useLazyGetUsersByIdQuery } from "../../store/users/users.api"

export const UserPage = () => {
    const { count } = useAppSelector(state => state.user)
    const { increment } = useActions()
    const { data, isLoading, isError, } = useGetUsersQuery('')
    const [FetchUser, { data: person }] = useLazyGetUsersByIdQuery()

    const handleClick = (id: number) => {
        FetchUser(id)
    }




    return (
        <div>
            <h1 >{count}</h1>
            <button onClick={() => increment(1)}></button>
            <div>
                {isLoading && <div>Loading...</div>}
                {isError && <div>Something went wrong...</div>}
                {data?.map((person) =>
                    <div onClick={() => handleClick(person.id)} key={person.id}>
                        <span>{person.firstname}</span>
                        <span>{person.lastname}</span>
                        <span>{person.phone}</span>
                    </div>
                )}
            </div>

            <br />
            <br />
            <br />
            <br />

            <div>
                {person && <div><p>{person?.firstname} {person.birthDate}</p></div>}
            </div>
        </div>
    )
}