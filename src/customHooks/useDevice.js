import React, { useState, useEffect } from 'react';


const useDevice = () => {
    const [deviceType, setDeviceType] = useState('desktop');
    // Note: This is for getting  device type 
    useEffect(() => {
        const getDeviceType = () => {
            let device = 'desktop';
            const { screen: { availWidth } = {} } = window || {}
            if (availWidth < 760) device = 'mobile';
            if (availWidth > 760 && availWidth < 1400) device = 'tab';

            setDeviceType(device)

        }
        window.addEventListener("resize", getDeviceType);
        return () => {
            window.removeEventListener("resize", getDeviceType);
        }
    }, [deviceType]);

    return deviceType;
}

export default useDevice;
