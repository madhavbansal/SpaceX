import React, { useEffect, useState } from 'react';
import { Filters, LaunchPrograms } from './index';
import { useDevice } from '../customHooks'
import { constants } from '../utils/constant';
import * as styles from './Home.style';

const Home = () => {
    const deviceType = useDevice();
    const style = styles[deviceType];
    return (
        <>
            <div style={style.text}>{constants.spaceXPrograms}</div>
            <div style={style.common}>
                <div style={style.filters}>
                    <Filters/>
                </div>
                <div style={style.LaunchPrograms}>
                    <LaunchPrograms/>
                </div>
            </div>
        </>
    )


}

export default Home