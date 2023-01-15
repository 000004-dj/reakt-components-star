import React, {useEffect, useState} from "react";
import moment from "moment";

export default {
    title: "useEffect demo"
}


export const Example = () => {
    console.log("State changed")
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("useEffect every render")
        document.title = counter.toString()
        }
    )
 useEffect(()=>{
        console.log("useEffect only first render")
     document.title = counter.toString()
        }, []
    )
 useEffect(()=>{
        console.log("useEffect first render and every counter changed")
     document.title = counter.toString()
        },[counter]
    )

    return (
        <>

            its COUNTER: {counter}
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            <br/>
            <hr/>
            its FAKE: {fake}
            <button onClick={() => {setFake(counter + 1)}}>+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<any>(0)

    useEffect(()=>{
        setInterval(() => {
            setCounter(moment().format("hh:mm:ss"))
        }, 1000)
    }, [])
    return (
        <>
            Actual time is: {counter}
        </>
    )
}

