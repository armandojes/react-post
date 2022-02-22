import axios, { AxiosRequestConfig } from 'axios';
import { apiUrl } from 'app/env';

/**
 * @typedef {Object} apiResponse
 * @property {Bolean} error - response status
 * @property {String|Array} errorMessage - errorDescrition or array or error descriptions
 */

/**
 * @param {AxiosRequestConfig} config - request config
 * @return {Promise<apiResponse>}
 */
const fetcher = async (config) => {
  console.log('fetcherConfig', config);
  try {
    const response = await axios({
      baseURL: apiUrl,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return {
      error: true,
      errorMessage: error.message,
    };
  }
};

export default fetcher;
