import React from 'react';
import { FilterSection } from './index';
import { sectionConfig } from '../utils/helper';
import { constants } from '../utils/constant';



const Filters = () => {
    return (
        <>
            {constants.filters}
            <FilterSection sectionConfig={sectionConfig.launchYear} />
            <FilterSection sectionConfig={sectionConfig.sucessfulLaunch} />
            <FilterSection sectionConfig={sectionConfig.sucessfulLanding} />

        </>
    )


}

export default React.memo(Filters);