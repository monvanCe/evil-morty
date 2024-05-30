import { loggerInterceptor } from '@/middleware/loggerInterceptor';
import { transformerInterceptor } from '@/middleware/transformerInterceptor';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
});

loggerInterceptor(axiosInstance);
transformerInterceptor(axiosInstance);

export default axiosInstance;
