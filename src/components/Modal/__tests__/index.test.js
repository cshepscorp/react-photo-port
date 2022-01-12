import React from 'react';
// resetting
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

afterEach(cleanup);

describe('Modal component render', () => {
    // baseline test
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} />);
    })
    // snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
        expect(asFragment()).toMatchSnapshot()
      })
    
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
          />);
        // act simulate click event
        fireEvent.click(getByText('Close this modal'));
        // assert Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})