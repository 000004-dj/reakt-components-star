import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";


const Template: Story<AccordionPropsType> = (args)=> <Accordion {...args}/>


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'blue' },
    },
} as ComponentMeta<typeof Accordion>;


// export const UnCollapsedMode2 = Template.bind({})
// UnCollapsedMode2.args ={
//     collapsed: false,
//     title: "Menu",
// }

// const callback = action("accordion mode event fired")
const onChangeCallback = action("item was pressed")

export const CollapsedMode = () => <Accordion title={"menu"} collapsed={true} onClick={onChangeCallback} items={[]}/>
export const UnCollapsedMode = () => <Accordion title={"Users"} collapsed={false} onClick={onChangeCallback } items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]} />

export const ActiveMode = () =>{
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        title={"Users"}
        collapsed={value}
        items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]}
        onClick={() => setValue(!value)}
        
    />
}



















