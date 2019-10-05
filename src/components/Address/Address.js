import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Address = props => {
  const { streetName, neighborhood, city, cityInitials, cep } = props.address;

  return (
    <div className="AddressWrapper">
      <strong>{streetName}</strong>
      <p>{neighborhood}</p>
      <p>
        {city}-{cityInitials}
      </p>
      <p>{cep}</p>
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
