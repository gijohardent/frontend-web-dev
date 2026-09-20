import type {UserProps} from "../props/UserProps.tsx"

const UserComponent = (props: UserProps) => {
    return (
        <div>
            <h1>{props.nama}</h1>
            <h3>Email: {props.email}</h3>
            <h3>NIM: {props.nim}</h3>
        </div>
    )
};

export default UserComponent;