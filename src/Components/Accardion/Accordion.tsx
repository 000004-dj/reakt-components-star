import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";
import UnControlledAccordionTitle from "../UnControledAccardion/UnControlledAccordionTitle";
import UnControlledAccordionBody from "../UnControledAccardion/UnControlledAccordionBody";

type PropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

function Accordion(props: PropsType) {
    return (
        <div>
            <div>

            </div>
            <UnControlledAccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <UnControlledAccordionBody/>}


        </div>

    )


}

export default Accordion


// const Accordion2 = (props: PropsType) => {
//
//     return (
//         <div>
//             <AccordionTitle title={props.title}/>
//             {!props.collapsed && <AccordionBody/>}
//         </div>
//     )
//
// }