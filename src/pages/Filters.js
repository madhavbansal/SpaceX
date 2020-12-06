import React from 'react';
import { FilterSection } from './index';
import { sectionConfig } from '../utils/helper';
import { constants } from '../utils/constant';
import * as styles from './Filters.style';



const Filters = () => {
    return (
        <>
            <div style={styles.style.text}>{constants.filters}</div>
            <FilterSection sectionConfig={sectionConfig.launchYear} />
            <FilterSection sectionConfig={sectionConfig.sucessfulLaunch}/>
            <FilterSection sectionConfig={sectionConfig.sucessfulLanding} />

        </>
    )


}

export default React.memo(Filters);