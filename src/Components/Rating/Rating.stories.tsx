import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from './Rating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

export const EmptyStars = () => <Rating onClick={action("clicked")} value={0}/>
export const Rating1 = () => <Rating onClick={action("clicked")} value={1}/>
export const Rating2 = () => <Rating onClick={action("clicked")} value={2}/>
export const Rating3 = () => <Rating onClick={action("clicked")} value={3}/>
export const Rating4 = () => <Rating onClick={action("clicked")} value={4}/>
export const Rating5 = () => <Rating onClick={action("clicked")} value={5}/>

export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return(
    <Rating onClick={setRating} value={rating}/>)}

















//
// const EmptyStars: ComponentStory<typeof Button> = (args) => <EmptyStars {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
