import React from 'react';

type titleType = {
    title: string
    onClick: () => void
    collapsed: boolean

}

function AccordionTitle(props: titleType) {
    console.log('AccordionTitle rendering')
    return (
        <div onClick={props.onClick}><br/>{props.title}</div>
    )
}
export default AccordionTitle