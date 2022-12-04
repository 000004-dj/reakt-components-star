import React, {useState} from 'react';
import UnControlledAccordionTitle from "./UnControlledAccordionTitle";
import UnControlledAccordionBody from "./UnControlledAccordionBody";

type PropsType = {
    title: string
}

function UnControlledAccordion(props: PropsType) {

    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <div>

            </div>
            <UnControlledAccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <UnControlledAccordionBody/>}


        </div>

    )

}

export default UnControlledAccordion


