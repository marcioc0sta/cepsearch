import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StreetName, RegularText } from './Address.styles';

const Address = props => {
  const { streetName, neighborhood, city, cityInitials, cep } = props.address;

  return (
    <div className="AddressWrapper">
      <StreetName>{streetName}</StreetName>
      <RegularText>{neighborhood}</RegularText>
      <RegularText>
        {city} - {cityInitials}
      </RegularText>
      <RegularText>{cep}</RegularText>
    </div>
  );
};

const mapStateToProps = ({ address }) => {
  return { address };
};

Address.propTypes = {
  address: PropTypes.object
};

export default connect(mapStateToProps)(Address);
