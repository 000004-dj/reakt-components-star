import React from 'react';

type titleType = {
    title: string
    onClick: () => void
}

function UnControlledAccordionTitle(props: titleType) {
    console.log("Title rendering")
    return (

        <div onClick={props.onClick}><br/>{props.title}</div>
    )
}

const UnControlledAccordionTitleUsable = React.memo(UnControlledAccordionTitle)

export default UnControlledAccordionTitleUsable