import cepApi from '../api/cepApi';
import geocodeApi from '../api/geocodeApi';
import addressSummarySelector from '../selectors/addressSummary';

export const GET_ADDRESS_FROM_CEP = 'GET_ADDRESS_FROM_CEP';
export const IS_ADDRESS_FROM_CEP_QUERY_LOADING = 'IS_ADDRESS_FROM_CEP_QUERY_LOADING';

const getAddressFromCep = address => {
  return {
    type: GET_ADDRESS_FROM_CEP,
    address
  };
};

const isAddressFromCepQueryLoading = (isLoading = false) => {
  return {
    type: IS_ADDRESS_FROM_CEP_QUERY_LOADING,
    isLoading
  };
};

export const handleGetAddresFromCep = cep => {
  return dispatch => {
    dispatch(isAddressFromCepQueryLoading(true));
    return cepApi(cep).then(result => {
      dispatch(isAddressFromCepQueryLoading(false));
      dispatch(getAddressFromCep(addressSummarySelector(result)));
    });
  };
};

// Promise.all([
//   cep(60720015),
//   geocode('av+general+osorio+de+paiva,857,+fortaleza+ce')
// ]).then(values => values.map(value => console.log(value.data)))
