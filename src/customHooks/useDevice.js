import React, { useState, useEffect } from 'react';


const useDevice = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  // Note: This is for getting  device type 
  useEffect(() => {
      const getDeviceType = () => {
          let device = 'desktop';
          const { innerWidth } = window || {}
          if (innerWidth && innerWidth <= 990) device = 'mobile';
          else if (innerWidth && innerWidth <= 1035) device = 'tab';
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
