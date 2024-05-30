import axiosInstance from '@/service/axiosConfig';

export const graphqlRequest = async (query: string, variables = {}) => {
  try {
    const res = await axiosInstance.post('', {
      query,
      variables,
    });
    return res.data;
  } catch (err) {
    console.error(`GraphQL request failed`, err);
    throw err;
  }
};
