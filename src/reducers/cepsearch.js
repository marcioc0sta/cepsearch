import {
  GET_ADDRESS_FROM_CEP,
  IS_ADDRESS_FROM_CEP_QUERY_LOADING,
  GET_COORDS,
  IS_COORD_QUERY_LOADING,
  RESET_SEARCH
} from '../actions/address';

const initialState = {
  address: {
    streetName: 'Esplanada dos Ministérios',
    neighborhood: 'Zona Cívico-Administrativa',
    city: 'Brasília',
    cityInitials: 'DF',
    cep: '70050-000'
  },
  coords: {
    lat: -15.7801,
    lng: -47.9292
  },
  zoom: 4,
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
        ...action.coords,
        zoom: 17
      };
    case IS_COORD_QUERY_LOADING:
      return {
        ...state,
        coordsQueryIsLoading: action.isLoading
      };
    case RESET_SEARCH:
      return {
        ...initialState,
        coordsQueryIsLoading: false
      };
    default:
      return state;
  }
}
