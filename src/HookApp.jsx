import './App.css'
import React, { useState, useEffect } from 'react';

function useDeviceWidth() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
            setDeviceWidth(window.innerWidth)
          };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceWidth;
}

export default function HookApp() {
  const deviceWidth = useDeviceWidth();
  return <div>Current Device Width :- {deviceWidth}</div>;
}
