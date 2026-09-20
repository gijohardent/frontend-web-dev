import type {UserProps} from "../props/UserProps.tsx"

const UserComponent = (props: UserProps) => {
    return (
        <div>
            <h2>Nama: {props.nama}</h2>
            <h2>NIM: {props.nim}</h2>
            <h2>Fakultas: {props.fakultas}</h2>
            <h2>Program Studi: {props.prodi}</h2>
            <h2>Semester: {props.semester}</h2>
        </div>
    )
};
export default UserComponent;