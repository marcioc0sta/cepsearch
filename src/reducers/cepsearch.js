import {
  GET_ADDRESS_FROM_CEP,
  IS_ADDRESS_FROM_CEP_QUERY_LOADING
} from '../actions/address';

const initialState = {
  address: {},
  addressFromCepIsLoading: null
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
    default:
      return state;
  }
}
