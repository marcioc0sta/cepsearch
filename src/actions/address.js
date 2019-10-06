import cepApi from '../api/cepApi';
import geocodeApi from '../api/geocodeApi';
import addressSummarySelector from '../selectors/addressSummary';
import coordsSelector from '../selectors/coords';

export const GET_ADDRESS_FROM_CEP = 'GET_ADDRESS_FROM_CEP';
export const IS_ADDRESS_FROM_CEP_QUERY_LOADING =
  'IS_ADDRESS_FROM_CEP_QUERY_LOADING';
export const GET_COORDS = 'GET_COORDS';
export const IS_COORD_QUERY_LOADING = 'IS_COORD_QUERY_LOADING';
export const RESET_SEARCH = 'RESET_SEARCH';

const getAddressFromCep = address => {
  return {
    type: GET_ADDRESS_FROM_CEP,
    address
  };
};

const getCoordinates = coords => {
  return {
    type: GET_COORDS,
    coords
  };
};

const isAddressFromCepQueryLoading = (isLoading = false) => {
  return {
    type: IS_ADDRESS_FROM_CEP_QUERY_LOADING,
    isLoading
  };
};

const isCoordQueryLoading = (isLoading = false) => {
  return {
    type: IS_COORD_QUERY_LOADING,
    isLoading
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  };
};

const handleGetCoords = fullAddress => {
  const streetNameToApi = `${fullAddress.logradouro.replace(' ', '+')},${
    fullAddress.localidade
  }+${fullAddress.uf}`;

  return dispatch => {
    dispatch(isCoordQueryLoading(true));
    return geocodeApi(streetNameToApi).then(result => {
      dispatch(isCoordQueryLoading(false));
      dispatch(getCoordinates(coordsSelector(result)));
    });
  };
};

export const handleGetAddresFromCep = cep => {
  return dispatch => {
    dispatch(isAddressFromCepQueryLoading(true));
    return cepApi(cep)
      .then(result => {
        dispatch(isAddressFromCepQueryLoading(false));
        dispatch(getAddressFromCep(addressSummarySelector(result)));
        return result;
      })
      .then(result => {
        return dispatch(handleGetCoords(result));
      })
      .catch(error => console.log('There is an error on cep api: ', error));
  };
};
