import axios from 'axios';

import API_KEYS from './config';

const geocode = address => 
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+-+sp&key=${API_KEYS.GOOGLE_API}`
  );

export default geocode;
