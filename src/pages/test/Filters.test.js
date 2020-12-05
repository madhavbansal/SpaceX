import React from 'react';
import renderer from 'react-test-renderer';
import Filters from '../Filters';


jest.mock('../FilterSection', ()=> 'FilterSection')

test('Test the Filter Component', () => {
  const component = renderer.create(
    <Filters/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});