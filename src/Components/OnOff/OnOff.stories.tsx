import React, {useState} from 'react';
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



















