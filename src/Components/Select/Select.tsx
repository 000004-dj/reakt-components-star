import React, {useState, KeyboardEvent, useEffect} from 'react';
// @ts-ignore
import s from './Select.module.css';


export type ItemType = {
    title: string
    value?: string
}
export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

 function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const precedentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (precedentElement) {
                        props.onChange(precedentElement.value)
                        return
                    }
                }
                props.onChange(props.items[0].value)
            }

        } else {
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }

    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0} onClick={()=>{setActive(!active)}}>
                <h3 onClick={toggleItems}>{selectItem && selectItem.title}</h3>

                {
                    active &&
                    <div className={s.items}>

                        {props.items.map(i =>
                            <div key={i.value}
                                 onClick={() => {onItemClick(i.value)}}
                                 className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                 onMouseEnter={() => {setHoveredElementValue(i.value)}}>

                                {i.title}

                            </div>)}

                    </div>
                }
            </div>
        </>
    )
}


export const SelectUsable = React.memo(Select)

