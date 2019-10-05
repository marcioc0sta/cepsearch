import axios from 'axios';

const cepApi = cepnumber =>
  axios
    .get(`https://viacep.com.br/ws/${cepnumber}/json`)
    .then(result => result.data)
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));

export default cepApi;
