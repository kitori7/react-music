import { BASE_URL, TIME_OUT } from "./config";
import request from "./request";
const requests = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
    responseSuccessFn: (response: any) => {
      return response;
    }
  }
});

export default requests;
