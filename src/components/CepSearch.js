import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { handleGetAddresFromCep } from '../actions/address';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import Address from './Address/Address';

class CepSearch extends Component {
  componentDidMount() {
    // this.props.getAddressFromCep(60720015);
  }

  render() {
    return (
      <Fragment>
        <Address />
        <GoogleMaps />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  getAddressFromCep: handleGetAddresFromCep
};

export default connect(
  null,
  mapDispatchToProps
)(CepSearch);
