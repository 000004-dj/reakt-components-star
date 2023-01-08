import React, {useState} from 'react';
import {SelectUsable} from './Select';


export default {
    title: 'SelectElement',
    component: SelectUsable,
}


export const Base = () => {

    const [value, setValue] = useState("1")

    return (
        <SelectUsable
            value={value}
            onChange={setValue}
            items={[
                {title: "Sam", value: "1"},
                {title: "Alena", value: "2"},
                {title: "Lol", value: "3"}
            ]}
        />
    )
}
export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <SelectUsable
            value={value}
            onChange={setValue}
            items={[
                {title: "Sam", value: "1"},
                {title: "Alena", value: "2"},
                {title: "Lol", value: "3"}
            ]}
        />
    )
}




export const ExampleUseMemo1 = () => {

    const [value, setValue] = useState(null)

    return (
        <SelectUsable
            value={value}
            onChange={setValue}
            items={[
                {title: "Sam", value: "1"},
                {title: "Alena", value: "2"},
                {title: "Lol", value: "3"}
            ]}
        />
    )
}


















