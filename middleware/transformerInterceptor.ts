import { episodeDataTransformer } from '@/utils/transformers';

import { AxiosResponse } from 'axios';

export const transformerInterceptor = (axiosInstance: any) => {
  axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    let transformedResponse = response;
    const { data } = response;

    if (data.results && data.results[0]['air_date']) {
      transformedResponse.data.results = data.results.map((episode: any) => {
        return episodeDataTransformer(episode);
      });
    }

    if (data['air_date']) {
      transformedResponse.data = episodeDataTransformer(data);
    }

    return transformedResponse;
  });
};
