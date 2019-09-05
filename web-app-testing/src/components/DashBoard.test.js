import React from 'react';
import { render } from '@testing-library/react';

import DashBoard from './DashBoard';

test('DashBoard renders without crashing', () => {
    render(<DashBoard />)
})

test('The strike button adds 1', () => {
    expect(handleStrike(1).toBe(1))
})