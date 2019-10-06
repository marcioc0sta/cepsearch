import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { handleGetAddresFromCep, resetSearch } from '../actions/address';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import Address from './Address/Address';

class CepSearch extends Component {
  componentDidMount() {
    this.props.resetSearch();
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
  getAddressFromCep: handleGetAddresFromCep,
  resetSearch
};

export default connect(
  null,
  mapDispatchToProps
)(CepSearch);
