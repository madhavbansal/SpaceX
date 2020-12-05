import React from 'react';
import renderer from 'react-test-renderer';
import FilterSection from '../FilterSection';
import { sectionConfig } from '../../utils/helper';


jest.mock('../../components/Button', () => 'ContainedButtons');
jest.mock('react-router-dom', () =>{
return {
    useLocation:()=>({}),
    useHistory:()=>({})
}
});

test('Test the FilterSection Component', () => {
    const component = renderer.create(
        <FilterSection sectionConfig={sectionConfig.launchYear} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});