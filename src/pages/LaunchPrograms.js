import React from 'react';
import { Fallback, MissionCard } from '../components';
import { useLaunchData, useLoader, useDevice } from '../customHooks';
import * as styles from './LaunchPrograms.style';

const LaunchPrograms = () => {
    const deviceType = useDevice();
    const { loading, error, data } = useLaunchData();
    const loader = useLoader();
    if (loading) {
        return loader;
    }
    if (error) {
        return <Fallback />
    }
    const style =styles[deviceType];
    return (
        <>
            {
                data.map(({
                    mission_name,
                    flight_number,
                    mission_id,
                    launch_year,
                    launch_success,
                    successfulLanding = false,
                    rocket: { first_stage: { cores = [] } = {} } = {},
                    links: { mission_patch, mission_patch_small }

                }) => <MissionCard style={style.card} key={flight_number} data={{ mission_name, flight_number, mission_id, launch_year, launch_success, successfulLanding, cores, mission_patch, mission_patch_small }} />)
            }
        </>
    )


}

export default LaunchPrograms;