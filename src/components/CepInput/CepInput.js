/* eslint-disable radix */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleGetAddresFromCep } from '../../actions/address';

const CepInput = props => {
  const [cep, setCep] = useState('');
  const { getAddressFromCep } = props;

  const handleSubmit = e => {
    e.preventDefault();

    const { cep: storeCep } = props.address;
    if (cep === storeCep) return;

    const cepToApi = cep.replace('-', '');
    getAddressFromCep(cepToApi);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cep}
        onChange={e => setCep(e.target.value.replace(/^(\d{5})(\d)/, '$1-$2'))}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

const mapStateToProps = ({ address }) => {
  return { address };
};

const mapDispatchToProps = {
  getAddressFromCep: handleGetAddresFromCep
};

CepInput.propTypes = {
  address: PropTypes.object,
  getAddressFromCep: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CepInput);
