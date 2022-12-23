import React from 'react';
import {AccordionTitleUsable} from "./AccordionTitle";
import {AccordionBodyUsable} from "./AccordionBody";

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

 function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <div>

            </div>
            <AccordionTitleUsable title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBodyUsable items={props.items} onClick={props.onClick}/>}


        </div>

    )


}


export const AccordionUsable = React.memo(Accordion)


