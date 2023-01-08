import React, {ChangeEvent, useState} from 'react';
import { ComponentMeta } from '@storybook/react';

import {OnOffUsable} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOffUsable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOffUsable>;

const callback = action("on or off clicked")

export const OnMode = () => <OnOffUsable on={true} setOn={callback} />
export const OffMode = () => <OnOffUsable on={false} setOn={callback}/>
export const ActiveMode = () =>{
 const [value, setValue] = useState<boolean>(false)
    return <OnOffUsable setOn={setValue} on={value}/>
}



// export const useMemoTraning = () =>{
//  const [value, setValue] = useState<boolean>(false)
//     const [a, setA] = useState(0)
//
//     const count = (e: ChangeEvent<HTMLButtonElement>) => {
//      let
//      return e.currentTarget.value
//     }
//
//     return (
//         <div>
//         <OnOffUsable setOn={setValue} on={value}/>
//             <button onClick={count}></button>
//         </div>
//     )
// }






















