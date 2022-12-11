import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UnControlledAccordion}  from './UnControlledAccordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
    argTypes: {
        backgroundColor: { control: 'blue' },
    },
} as ComponentMeta<typeof UnControlledAccordion>;

// const callback = action("accordion mode event fired")

export const ActiveMode = () => <UnControlledAccordion title={"menu"}/>



















