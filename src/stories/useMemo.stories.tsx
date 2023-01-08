import React, {useCallback, useMemo, useState} from "react";
import {v1} from "uuid";


export default {
    title: "UseMemo"
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)


    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        let fake = 0
        while (fake < 10000) {
            fake++;
            const fakeValue = Math.random()
        }
        resultB = resultB * i
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a {resultA}
            </div>

            <div>
                Result for b {resultB}
            </div>
        </>
    )
}

const UserSecrets = (props: { users: Array<string>, }) => {
    console.log("DANGEROUS!!!")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UserSecrets)

//==============================================================================================================================================

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sam", "Alena", "Mark"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {

        setUsers([...users, v1()])
    }

    return (
        <>
            <button onClick={addUser}>Add</button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


type BookSecretsType = {
    books: Array<string>
    addBook: () => void
}
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, "Angular" + v1()])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            setBooks([...books, "Angular" + v1()])
        }, [books])

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>
            {counter}
            <Books books={newArray} addBook={memoizedAddBook}/>
        </>
    )
}


const BookSecrets = (props: BookSecretsType) => {
    console.log("DANGEROUS!!!")
    return <div>
        <button onClick={() => props.addBook()}>Add book</button>
        {props.books.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const Books = React.memo(BookSecrets)