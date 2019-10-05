import { createSelector } from 'reselect';

const getAddress = state => {
  const address = {
    streetName: state.logradouro,
    neighborhood: state.bairro,
    city: state.localidade,
    cityInitials: state.uf,
    cep: state.cep
  };
  return address;
};

const addressSummarySelector = createSelector(
  getAddress,
  address => ({ address })
);

export default addressSummarySelector;
