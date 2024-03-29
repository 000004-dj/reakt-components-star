import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOffUsable} from "../Components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    component: OnOffUsable,
} as ComponentMeta<typeof OnOffUsable>

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)}

    return <>
        <input onChange={onChangeHandler}
        /> - {value}
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)}

    return <>
        <input id={"inputId"} ref={inputRef}/> <button onClick={save}>SAVE</button> - actual value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}

return <input value={parentValue} onChange={onChange} />
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.checked)}

    return <input type={"checkbox"} checked={parentValue} onChange={onChange} />
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>)=>{setParentValue(e.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option value="1">none</option>
        <option value="2">Minsk</option>
        <option value="3">Moscow</option>
        <option value="4">Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={"Some information"}/>


