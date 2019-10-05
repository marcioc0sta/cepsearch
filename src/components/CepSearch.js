import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

import { handleGetAddresFromCep } from '../actions/address';

const style = {
  width: '50%',
  height: '50%'
};

class CepSearch extends Component {
  componentDidMount() {
    this.props.getAddressFromCep(60720015);
  }

  render() {
    // const { lat, long: lng } = this.props.coords;

    return (
      <div>
        {!this.props.coordsQueryIsLoading && (
          <div>maps</div>
          // <Map
          //   style={style}
          //   google={this.props.google}
          //   zoom={17}
          //   center={{ lat, lng }}
          // >
          //   <Marker position={{ lat, lng }} />
          // </Map>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ address, coords, coordsQueryIsLoading }) => {
  return { address, coords, coordsQueryIsLoading };
};

const mapDispatchToProps = {
  getAddressFromCep: handleGetAddresFromCep
};

CepSearch.propTypes = {
  getAddressFromCep: PropTypes.func,
  google: PropTypes.object,
  coords: PropTypes.object,
  coordsQueryIsLoading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(CepSearch)
);
