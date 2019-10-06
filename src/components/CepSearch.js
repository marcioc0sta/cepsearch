import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetSearch } from '../actions/address';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import Address from './Address/Address';
import CepInput from './CepInput/CepInput';

class CepSearch extends PureComponent {
  componentDidMount() {
    this.props.resetSearch();
  }

  render() {
    return (
      <Fragment>
        <CepInput />
        <Address />
        {/* <GoogleMaps /> */}
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  resetSearch
};

CepSearch.propTypes = {
  resetSearch: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(CepSearch);
