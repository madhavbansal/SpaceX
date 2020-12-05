import React from 'react';
import renderer from 'react-test-renderer';
import useLoader from '../useLoader';


jest.mock('@material-ui/core/CircularProgress', ()=> (<></>))

test('Test the useLoader Component', () => {
  const component = renderer.create(
    <useLoader/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});