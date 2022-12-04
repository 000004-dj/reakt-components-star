import React from 'react';

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function UnControlledStar(props: StarPropsType) {
    return <span onClick={()=>props.setValue(props.value)}>{props.selected ? "★" : "☆"}</span>

}

export default UnControlledStar
