import React from 'react';
import renderer from 'react-test-renderer';
import useLaunchData from '../useLaunchData';


jest.mock('react-router-dom', () => {
  return {
    useLocation: () => ({}),
    useHistory: () => ({})
  }
})

jest.mock('query-string', () => {
  return {
    parse:()=>({})
  }
})

test('Test the useLaunchData Component', () => {
  const component = renderer.create(
    <useLaunchData />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});