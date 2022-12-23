import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

import {AccordionUsable, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";


const Template: Story<AccordionPropsType> = (args)=> <AccordionUsable {...args}/>


export default {
    title: 'Accordion',
    component: AccordionUsable,
    argTypes: {
        backgroundColor: { control: 'blue' },
    },
} as ComponentMeta<typeof AccordionUsable>;


// export const UnCollapsedMode2 = Template.bind({})
// UnCollapsedMode2.args ={
//     collapsed: false,
//     title: "Menu",
// }

// const callback = action("accordion mode event fired")
const onChangeCallback = action("item was pressed")

export const CollapsedMode = () => <AccordionUsable title={"menu"} collapsed={true} onClick={onChangeCallback} items={[]}/>
export const UnCollapsedMode = () => <AccordionUsable title={"Users"} collapsed={false} onClick={onChangeCallback } items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]} />

export const ActiveMode = () =>{
    const [value, setValue] = useState<boolean>(false)
    return <AccordionUsable
        title={"Users"}
        collapsed={value}
        items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]}
        onClick={() => setValue(!value)}
        
    />
}



















