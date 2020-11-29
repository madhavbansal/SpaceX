import React from 'react';
import { Fallback, MissionCard } from '../components';
import { useLaunchData, useLoader } from '../customHooks';

const LaunchPrograms = () => {
    const { loading, error, data } = useLaunchData();
    const loader = useLoader();
    if (loading) {
        return loader;
    }
    if (error) {
        return <Fallback/>
    }

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
                    links: { mission_patch }

                }) => <MissionCard key={flight_number} data={{ mission_name, flight_number, mission_id, launch_year, launch_success, successfulLanding, mission_patch }} />)
            }
        </>
    )


}

export default LaunchPrograms;