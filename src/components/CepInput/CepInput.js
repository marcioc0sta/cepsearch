/* eslint-disable radix */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { handleGetAddresFromCep } from '../../actions/address';

import {
  CepInputWrapper,
  FormTitle,
  FormInput,
  FormInputLabel,
  FormButton
} from './CepInput.styles';

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
    <CepInputWrapper>
      <FormTitle>Consultar</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInputLabel>
          CEP:
          <InputMask
            type="text"
            value={cep}
            mask="99999-999"
            maskChar=""
            onChange={e => setCep(e.target.value)}
          >
            {inputProps => <FormInput {...inputProps} type="text" />}
          </InputMask>
        </FormInputLabel>
        <FormButton type="submit">Buscar</FormButton>
      </form>
    </CepInputWrapper>
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
