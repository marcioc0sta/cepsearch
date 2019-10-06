import axios from 'axios';

const geocodeApi = address =>
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )
    .then(result => result.data)
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));

export default geocodeApi;
