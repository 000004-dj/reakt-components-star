import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';

import {RatingUsable, RatingValueType} from './Rating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating',
    component: RatingUsable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingUsable>;

export const EmptyStars = () => <RatingUsable onClick={action("clicked")} value={0}/>
export const Rating1 = () => <RatingUsable onClick={action("clicked")} value={1}/>
export const Rating2 = () => <RatingUsable onClick={action("clicked")} value={2}/>
export const Rating3 = () => <RatingUsable onClick={action("clicked")} value={3}/>
export const Rating4 = () => <RatingUsable onClick={action("clicked")} value={4}/>
export const Rating5 = () => <RatingUsable onClick={action("clicked")} value={5}/>

export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return(
    <RatingUsable onClick={setRating} value={rating}/>)}

















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
