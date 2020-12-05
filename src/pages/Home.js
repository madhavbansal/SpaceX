import React from 'react';
import { Filters, LaunchPrograms } from './index';
import { constants } from '../utils/constant';
import * as styles from './Home.style';

const Home = () => {
    return (
        <>
            <div style={styles.style.text}>{constants.spaceXPrograms}</div>
            <div style={styles.style.filters}>
            <Filters />
            </div>
            <div style={styles.style.LaunchPrograms}>
            <LaunchPrograms />
            </div>

        </>
    )


}

export default Home