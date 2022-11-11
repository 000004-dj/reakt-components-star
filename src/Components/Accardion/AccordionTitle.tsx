import React from 'react';

type titleType = {
    title: string
}

function AccordionTitle(props: titleType) {
    console.log('AccordionTitle rendering')
    return (
        <>{props.title}</>
    )
}
export default AccordionTitle