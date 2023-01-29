import React, {useEffect, useState} from "react";
import moment from "moment";

export default {
    title: "useEffect demo"
}


export const Example = () => {
    console.log("State changed")
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
            console.log("useEffect every render")
            document.title = counter.toString()
        }
    )
    useEffect(() => {
            console.log("useEffect only first render")
            document.title = counter.toString()
        }, []
    )
    useEffect(() => {
            console.log("useEffect first render and every counter changed")
            document.title = counter.toString()
        }, [counter]
    )

    return (
        <>

            its COUNTER: {counter}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <br/>
            <hr/>
            its FAKE: {fake}
            <button onClick={() => {
                setFake(counter + 1)
            }}>+
            </button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<any>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(moment().format("hh:mm:ss"))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <>
            Actual time is: {counter}
        </>
    )
}

export const ResetEffect = () => {
    const [counter, setCounter] = useState<any>(0)
    console.log("component render with: " + counter)
    useEffect(() => {
        console.log("reset occurred:" + counter)


        return () => {
            console.log("RESET EFFECT:" + counter)
        }
    }, [counter])
    return (
        <>
            <span style={{fontFamily: "cursive", fontSize: "30px"}}>{counter} </span>
            <button onClick={() => {
                setCounter(counter + 1)
            }} style={{background: "red", fontSize: "20px", borderRadius: "10px"}}>+
            </button>
        </>
    )
}

export const KeysTrackerEffect = () => {
    const [text, setText] = useState("")
    console.log("component render with: " + text)
    useEffect(() => {
        const handlerA = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handlerA)


        return () => {
            window.removeEventListener("keypress", handlerA)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}





