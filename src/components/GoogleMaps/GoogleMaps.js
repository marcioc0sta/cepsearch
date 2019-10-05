import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

const style = {
  width: '50%',
  height: '50%'
};

const GoogleMaps = props => {
  const { lat, lng } = props.coords;
  return (
    <div>
      {!props.coordsQueryIsLoading && (
        <Map
          style={style}
          google={props.google}
          zoom={17}
          center={{ lat, lng }}
        >
          <Marker position={{ lat, lng }} />
        </Map>
      )}
    </div>
  );
};

const mapStateToProps = ({ coords, coordsQueryIsLoading }) => {
  return { coords, coordsQueryIsLoading };
};

GoogleMaps.propTypes = {
  google: PropTypes.object,
  coords: PropTypes.object,
  coordsQueryIsLoading: PropTypes.bool
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(GoogleMaps)
);
