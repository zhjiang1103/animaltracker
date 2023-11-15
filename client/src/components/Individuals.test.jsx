import React from 'react';
import { render } from '@testing-library/react';
import Individuals from './Individuals';

// Mock the props you want to pass to the component
const mockProps = {
  individual: {
    commonname: 'Mock Common Name',
    nickname: 'Mock Nickname',
    scientistname: 'Mock Scientist Name',
  },
};

test('renders Individuals component', () => {
  // Render the component with mocked props
  const { getByText } = render(<Individuals {...mockProps} />);

  // Assert that the rendered content is as expected
  expect(getByText(`Individuals for species ${mockProps.individual.commonname}`)).toBeInTheDocument();
  expect(getByText(`Individual nickname: ${mockProps.individual.nickname}`)).toBeInTheDocument();
  expect(getByText(`Scientist Name: ${mockProps.individual.scientistname}`)).toBeInTheDocument();
});
