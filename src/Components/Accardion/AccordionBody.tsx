import React from 'react';
import {ItemType} from "./Accordion";


export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering');

    return (
        <ul>
            {props.items.map((i,index) => <li key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    )
}



export const AccordionBodyUsable = React.memo(AccordionBody)