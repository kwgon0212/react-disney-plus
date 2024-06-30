import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1cb083f64616fb590ea3dcd62a1e7278',
    language: 'ko-KR',
  },
});

export default instance;
