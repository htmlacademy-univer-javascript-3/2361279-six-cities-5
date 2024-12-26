import axios from 'axios';

export function configureAxios() {
  return axios.create({
    baseURL: 'https://14.design.htmlacademy.pro/six-cities',
    timeout: 5000
  });
}

