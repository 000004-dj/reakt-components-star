import React, {useState} from "react";


type PropsType = {
    setOn: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOff] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        background: on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: on ? "yellow" : "red",

    }

    const onClickHandlerFalse = () => {
        setOff(false)
        props.setOn(false)
    }
    const onClickHandlerTrue = () => {
        setOff(true)
        props.setOn(true)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandlerTrue}>
                ON
            </div>
            <div style={offStyle} onClick={onClickHandlerFalse}>
                OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}