import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

import { handleGetAddresFromCep } from '../actions/address';
import addressSummarySelector from '../selectors/addressSummary';

const style = {
  width: '50%',
  height: '50%'
};

class CepSearch extends Component {
  componentDidMount() {
    this.props.getAddressFromCep(60720015);
  }

  render() {
    return (
      <Map
        style={style}
        google={this.props.google}
        zoom={17}
        initialCenter={{ lat: -3.7779367, lng: -38.569881 }}
      >
        <Marker name={'Current location'} />
      </Map>
    );
  }
}

const mapStateToProps = ({ address }) => {
  return { address };
};

const mapDispatchToProps = {
  getAddressFromCep: handleGetAddresFromCep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(CepSearch)
);
