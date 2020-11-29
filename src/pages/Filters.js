import React from 'react';
import { FilerSection } from './index';
import { sectionConfig } from '../utils/helper';
import { constants } from '../utils/constant';



const Filters = () => {
    return (
        <>
            {constants.filters}
            <FilerSection sectionConfig={sectionConfig.launchYear} />
            <FilerSection sectionConfig={sectionConfig.sucessfulLaunch} />
            <FilerSection sectionConfig={sectionConfig.sucessfulLanding} />

        </>
    )


}

export default React.memo(Filters);