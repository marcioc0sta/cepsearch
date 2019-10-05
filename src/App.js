/* eslint-disable react/prop-types */
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import cep from './api/cep';
import geocode from './api/geocode';

const style = {
  width: '50%',
  height: '50%'
};

function App(props) {
  Promise.all([
    cep(60720015),
    geocode('av+general+osorio+de+paiva,857,+fortaleza+ce')
  ]).then(values => values.map(value => console.log(value.data)));

  return (
    <div className="App">
      <Map
        style={style}
        google={props.google}
        zoom={17}
        initialCenter={{ lat: -3.7779367, lng: -38.569881 }}
      >
        <Marker name={'Current location'} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(App);
