import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

const style = {
  width: '100%',
  height: '100%'
};

const GoogleMaps = props => {
  const { lat, lng } = props.coords;
  const { zoom } = props;
  return (
    <Fragment>
      {!props.coordsQueryIsLoading && (
        <Map
          style={style}
          google={props.google}
          zoom={zoom}
          initialCenter={{ lat, lng }}
          center={{ lat, lng }}
        >
          <Marker position={{ lat, lng }} />
        </Map>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ coords, zoom, coordsQueryIsLoading }) => {
  return { coords, coordsQueryIsLoading, zoom };
};

GoogleMaps.propTypes = {
  zoom: PropTypes.string,
  google: PropTypes.object,
  coords: PropTypes.object,
  coordsQueryIsLoading: PropTypes.bool
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(GoogleMaps)
);
