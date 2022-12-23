import React from 'react';


function UnControlledAccordionBody() {
    console.log("Body rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

const UnControlledAccordionBodyUsable = React.memo(UnControlledAccordionBody)

export default UnControlledAccordionBodyUsable