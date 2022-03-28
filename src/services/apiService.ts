import axios from 'axios';

const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m`
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request: any) => {
      return request;
  }, (error) => {
    return Promise.reject(error);
  });

  const getDatas = () => { 
    return axiosInstance.get(API_URL);
  };

  export default {
      getDatas
  }