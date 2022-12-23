import React from "react";


type PropsType = {
    setOn: (value: boolean) => void
    on: boolean
}

 const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        background: props.on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: props.on ? "yellow" : "red",

    }



    return (
        <div>
            <div style={onStyle} onClick={()=>props.setOn(true)}>ON
            </div>
            <div style={offStyle} onClick = {()=>props.setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


export const OnOffUsable = React.memo(OnOff)