import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";
import AccordionTitle from "./AccordionTitle";


const Template: Story<AccordionPropsType> = (args)=> <Accordion {...args}/>


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'blue' },
    },
} as ComponentMeta<typeof Accordion>;


export const UnCollapsedMode2 = Template.bind({})
UnCollapsedMode2.args ={
    collapsed: false,
    title: "Menu",
}

const callback = action("accordion mode event fired")

export const CollapsedMode = () => <Accordion title={"menu"} collapsed={true} onClick={callback}/>
export const UnCollapsedMode = () => <Accordion title={"Users"} collapsed={false} onClick={callback}/>

export const ActiveMode = () =>{
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={"Users"} collapsed={value} onClick={()=>setValue(!value)}/>
}



















