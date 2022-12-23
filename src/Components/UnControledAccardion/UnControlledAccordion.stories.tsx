import React from 'react';
import {ComponentMeta } from '@storybook/react';

import {UnControlledAccordionUsable}  from './UnControlledAccordion';


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordionUsable,
    argTypes: {
        backgroundColor: { control: 'blue' },
    },
} as ComponentMeta<typeof UnControlledAccordionUsable>;


export const ActiveMode = () => <UnControlledAccordionUsable title={"menu"}/>



















