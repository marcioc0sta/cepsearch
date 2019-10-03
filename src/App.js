/* eslint-disable react/prop-types */
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import cep from './api/cep';
import geocode from './api/geocode';
import API_KEYS from './api/config';

const style = {
  width: '50%',
  height: '50%'
};

function App(props) {
  Promise.all([
    cep(60533592),
    geocode('Rua+Miguel+Mentem+Vila+Guilherme,+sao+paulo')
  ]).then(values => values.map(value => console.log(value.data)));

  return (
    <div className="App">
      <Map
        style={style}
        google={props.google}
        zoom={17}
        initialCenter={{ lat: -23.515663, lng: -46.6132669 }}
      >
        <Marker name={'Current location'} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEYS.GOOGLE_API
})(App);
