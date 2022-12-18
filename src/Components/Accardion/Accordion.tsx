import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

export type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    title: string
    /**
     * Elements that are showed when is opened
     */
    collapsed: boolean
    /**
     * Callback that is called when any item clicked
     */
    onClick: () => void
    items: ItemType[]
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <div>

            </div>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}


        </div>

    )


}


