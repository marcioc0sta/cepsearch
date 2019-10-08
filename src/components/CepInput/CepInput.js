/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import {
  handleGetAddresFromCep,
  resetInputAction
} from '../../actions/address';

import {
  CepInputWrapper,
  FormTitle,
  FormInput,
  FormInputLabel,
  FormButton,
  ErrorMessage
} from './CepInput.styles';

const CepInput = props => {
  const [cep, setCep] = useState('');
  const { getAddressFromCep, errorHasOcurred } = props;

  useEffect(() => {
    const { resetInput } = props;
    if (!resetInput) return;

    setCep('');
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();

    const { cep: storeCep } = props.address;
    if (cep === storeCep || cep.length === 0) return;

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
            onClick={() => props.resetInputAction(false)}
            onChange={e => setCep(e.target.value)}
          >
            {inputProps => (
              <FormInput
                hasError={errorHasOcurred}
                {...inputProps}
                type="text"
              />
            )}
          </InputMask>
        </FormInputLabel>
        <FormButton type="submit">Buscar</FormButton>
      </form>
      {errorHasOcurred && (
        <ErrorMessage>
          Houve um erro no servidor ou o cep digitado não é valido.
        </ErrorMessage>
      )}
    </CepInputWrapper>
  );
};

const mapStateToProps = ({ address, errorHasOcurred, resetInput }) => {
  return { address, errorHasOcurred, resetInput };
};

const mapDispatchToProps = {
  getAddressFromCep: handleGetAddresFromCep,
  resetInputAction
};

CepInput.propTypes = {
  resetInputAction: PropTypes.func,
  resetInput: PropTypes.bool,
  errorHasOcurred: PropTypes.bool,
  address: PropTypes.object,
  getAddressFromCep: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CepInput);
