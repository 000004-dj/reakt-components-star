import React, {useState} from "react";
import {v1} from "uuid";

export default {
    title: "React.memo demo"
}


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecrets = (props: { users: Array<string>, }) => {
    console.log("DANGEROUS!!!")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersSecrets)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sam", "Alena", "Mark"])

    const addUser = () => {

        setUsers([...users, v1()])
    }
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>
            <button onClick={addUser}>Add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}



