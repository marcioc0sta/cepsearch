import axios from 'axios';

const geocode = address => 
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+-+sp&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );

export default geocode;
