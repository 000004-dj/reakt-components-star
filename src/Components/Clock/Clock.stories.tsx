import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Clock} from './Clock';

export default {
    title: 'Example/Clock',
    component: Clock,

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const DigitalClock = Template.bind({});
DigitalClock.args = {
    mode: "digital"
};
export const AnalogClock = Template.bind({});
AnalogClock.args = {
    mode: "analog"
};

