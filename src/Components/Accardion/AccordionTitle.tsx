import React from 'react';

type titleType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: titleType) {
    console.log('AccordionTitle rendering')
    return (
        <div onClick={props.onClick}><br/>{props.title}</div>
    )
}

export const  AccordionTitleUsable = React.memo(AccordionTitle)