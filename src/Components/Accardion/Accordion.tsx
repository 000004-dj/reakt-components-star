import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";
import UnControlledAccordionTitle from "../UnControledAccardion/UnControlledAccordionTitle";
import UnControlledAccordionBody from "../UnControledAccardion/UnControlledAccordionBody";

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
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <div>

            </div>
            <UnControlledAccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <UnControlledAccordionBody/>}


        </div>

    )


}


