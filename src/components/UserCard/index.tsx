import { IUser } from "../../models/models";
import styles from './styles.module.scss';

interface IProps {
    onClick: (username: string) => void
}

export const UserCard = ({ user, ...props }: { user: IUser } & IProps) => {

    const { onClick } = props
    return (
        <>
            <div onClick={() => onClick(user.login)} className={styles.userContainer} >
                <img src={user.avatar_url} alt={user.gravatar_id} />
                <div>
                    <p>{user.login}</p>
                </div>
            </div>


        </>
    )
}