import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: PropsType) {
    console.log('Accordion rendering');
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title = {props.title}/>
                <AccordionBody/>
            </div>
        );
    }else {
        return (
            <>
                <AccordionTitle title = {props.title}/>
            </>
        );
    }

}
export default Accordion