import {create} from 'apisauce';

const BASE_URL = 'https://pokeapi.co/api/v2';

const Api = create({
  baseURL: `${BASE_URL}`,

  timeout: 30000,
});

export default Api;
