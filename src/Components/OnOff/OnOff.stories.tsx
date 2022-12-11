import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

const callback = action("on or off clicked")

export const OnMode = () => <OnOff on={true} setOn={callback} />
export const OffMode = () => <OnOff on={false} setOn={callback}/>

export const ActiveMode = () =>{
 const [value, setValue] = useState<boolean>(false)
    return <OnOff setOn={setValue} on={value}/>
}



















