import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UnControlledRating} from './UnControlledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UnControlledRating>;

export const StarsActiveMode = () => <UnControlledRating />












