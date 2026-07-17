import { MAP_SET_CENTER } from './action-types';

export const mapSetCenter = (center) => {
  return {
    type: MAP_SET_CENTER,
    center,
  };
};
