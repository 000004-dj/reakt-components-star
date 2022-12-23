import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledOnOffUsable} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOffUsable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOffUsable>;

const callback = action("on or off clicked")

export const UncontrolledOnOffMode = () => <UncontrolledOnOffUsable setOn={callback}/>




















