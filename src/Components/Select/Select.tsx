import React from 'react';
import Star from './Star'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: () => void
    items: ItemType[]
}


export function Rating(props: SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )

}
