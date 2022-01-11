// We need react to enable the components to function properly so we can test them.
import React from 'react';

// retrieve some functions from the React Testing Library.
// 'render' tells Jest to create a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// cleanup function is used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

// import the component we'll be testing
import About from '..';

// ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// use the describe function to declare the component we're testing, by adding the following code:
describe('About component', () => {
    // renders About test
    // first test
    // In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    it('renders', () => {
        render(<About />);
    });
    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the About component
        // test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})
