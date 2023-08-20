'use client;';

import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Function to update screen width
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener on component mount
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); // Empty dependency array to run the effect only once

  return screenWidth;
};
