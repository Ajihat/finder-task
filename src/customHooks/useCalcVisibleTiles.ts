import { useEffect, useState } from 'react';

import { breakpoints } from '../data/breakpoints';

const calcInitialVisibleTiles = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > breakpoints.tablet) {
    return 6;
  } else if (windowWidth > breakpoints.mobile) {
    return 4;
  } else {
    return 6;
  }
};

export const useCalcVisibleTiles = () => {
  const [visibleTilesNumber, setVisibleTilesNumber] = useState<number>(() => calcInitialVisibleTiles());

  const calcVisibleTiles = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > breakpoints.tablet) {
      setVisibleTilesNumber(6);
    }
    if (windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet) {
      setVisibleTilesNumber(4);
    }

    if (windowWidth <= breakpoints.mobile) {
      setVisibleTilesNumber(6);
    }
  };

  useEffect(() => {
    calcVisibleTiles();
    window.addEventListener('resize', calcVisibleTiles);
    return () => window.removeEventListener('resize', calcVisibleTiles);
  }, []);

  return visibleTilesNumber;
};
