import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetSearch, resetInputAction } from '../actions/address';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import Address from './Address/Address';
import CepInput from './CepInput/CepInput';

import CloseButtonIcon from './CloseButtonIcon';
import {
  AddressAndMapWrapper,
  MapsWrapper,
  CloseWrapper
} from './CepSearch.styles';

class CepSearch extends PureComponent {
  reset = () => {
    this.props.resetSearch();
    this.props.resetInputAction(true);
  };

  render() {
    return (
      <Fragment>
        <CepInput />
        <AddressAndMapWrapper>
          <CloseWrapper onClick={this.reset}>
            <CloseButtonIcon size="20px" color="#95a5a6" />
          </CloseWrapper>
          <Address />
          <MapsWrapper>
            <GoogleMaps />
          </MapsWrapper>
        </AddressAndMapWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  resetSearch,
  resetInputAction
};

CepSearch.propTypes = {
  resetSearch: PropTypes.func,
  resetInputAction: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(CepSearch);
