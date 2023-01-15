import React, {useState} from "react";

export default {
    title: "useState demo"
}


export const Example = () => {
    console.log("State changed")
    const [counter, setCounter] = useState(0)


    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>
            {counter}
        </>
    )
}

