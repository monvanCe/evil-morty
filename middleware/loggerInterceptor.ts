import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const loggerInterceptor = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log('REQUEST: ', config.data.query, config.data.variables);
    return config;
  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    console.log('RESPONSE: ', {
      status: response.status,
      data: response.data.data,
    });
    return response;
  });
};
