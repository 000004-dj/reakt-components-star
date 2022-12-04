import React from 'react';

type titleType = {
    title: string
    onClick: () => void
}

function UnControlledAccordionTitle(props: titleType) {

    return (

        <div onClick={props.onClick}><br/>{props.title}</div>
    )
}

export default UnControlledAccordionTitle