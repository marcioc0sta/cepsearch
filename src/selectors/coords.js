import { createSelector } from 'reselect';

const getCoords = state => {
  const coords = {
    lat: state.results[0].geometry.location.lat,
    lng: state.results[0].geometry.location.lng
  };
  return coords;
};

const coordsSelector = createSelector(
  getCoords,
  coords => ({ coords })
);

export default coordsSelector;
