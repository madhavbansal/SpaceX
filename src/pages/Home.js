import React from 'react';
import { Filters, LaunchPrograms } from './index';
import { constants } from '../utils/constant';

const Home = () => {
    return (
        <>
            {constants.spaceXPrograms}
            <Filters />
            <LaunchPrograms />

        </>
    )


}

export default Home