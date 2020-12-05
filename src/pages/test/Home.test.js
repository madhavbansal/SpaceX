import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

jest.mock('../Filters', ()=> 'Filters')
jest.mock('../LaunchPrograms', ()=> 'LaunchPrograms')

test('Test the Home Component', () => {
  const component = renderer.create(
    <Home/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});