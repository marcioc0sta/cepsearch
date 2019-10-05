import {
  GET_ADDRESS_FROM_CEP,
  IS_ADDRESS_FROM_CEP_QUERY_LOADING,
  GET_COORDS,
  IS_COORD_QUERY_LOADING,
} from '../actions/address';

const initialState = {
  address: {},
  coords: {},
  addressFromCepIsLoading: true,
  coordsQueryIsLoading: true
};

export default function cepsearch(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_FROM_CEP:
      return {
        ...state,
        ...action.address
      };
    case IS_ADDRESS_FROM_CEP_QUERY_LOADING:
      return {
        ...state,
        addressFromCepIsLoading: action.isLoading
      };
    case GET_COORDS:
      return {
        ...state,
        ...action.coords
      };
    case IS_COORD_QUERY_LOADING:
      return {
        ...state,
        coordsQueryIsLoading: action.isLoading
      };
    default:
      return state;
  }
}
