import axios from 'axios';

const cep = cepnumber =>
  axios.get(`https://viacep.com.br/ws/${cepnumber}/json`);

export default cep;
