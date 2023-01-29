import React, {useEffect, useState} from "react";
import AnalogueClock from 'react-analogue-clock';


type PropsType = {
    mode?: "digital" | "analog"
}

const get2digitsStrings = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [time, setClock] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    })
    const clockOptions = {
        baseColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 5,
        centerColor: '#000000',
        handColors: {
            hour: '#000000',
            minute: '#000000',
            second: '#000000',
        },
        notchColor: '#000000',
        numbersColor: '#000000',
        showNumbers: true,
        size: 300
    }

    return (
        <div>
            {props.mode === "digital" &&
                <>
                    <span>{get2digitsStrings(time.getHours())}:</span>
                    <span>{get2digitsStrings(time.getMinutes())}:</span>
                    <span>{get2digitsStrings(time.getSeconds())}</span>
                </>
            }
            {props.mode === "analog" &&
                <>
                    <AnalogueClock {...clockOptions} />
                </>
            }

        </div>
    )
}