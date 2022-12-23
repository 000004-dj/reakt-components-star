import React from 'react';
import {ComponentMeta} from '@storybook/react';

import {UnControlledRatingUsable} from './UnControlledRating';


export default {
    title: 'UnControlledRating',
    component: UnControlledRatingUsable,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UnControlledRatingUsable>;

export const StarsActiveMode = () => <UnControlledRatingUsable/>












