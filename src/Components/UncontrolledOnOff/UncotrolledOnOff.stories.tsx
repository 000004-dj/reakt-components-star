import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action("on or off clicked")

export const UncontrolledOnOffMode = () => <UncontrolledOnOff setOn={callback}/>




















