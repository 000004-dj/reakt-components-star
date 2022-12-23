import React, {useReducer} from 'react';
import {reducer} from "./reducer";
import UnControlledAccordionBodyUsable from "./UnControlledAccordionBody";
import UnControlledAccordionTitleUsable from "./UnControlledAccordionTitle";

type PropsType = {
    title: string
}


 function UnControlledAccordion(props: PropsType) {
    console.log("Accordion rendering")

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <div>

            </div>
            {/*<UnControlledAccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <UnControlledAccordionTitleUsable title={props.title} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
            {!state.collapsed && <UnControlledAccordionBodyUsable/>}


        </div>

    )

}


export const UnControlledAccordionUsable = React.memo(UnControlledAccordion)



