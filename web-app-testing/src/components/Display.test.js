import React from 'react';
import { render, getByText } from '@testing-library/react';

import Display from './Display';
import App from '../App';

test('Display renders without crashing', () => {
    render(<Display />)
})

