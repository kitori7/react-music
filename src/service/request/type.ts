import type { AxiosRequestConfig, AxiosResponse } from "axios";
//针对AxiosRequestConfig配置进行拓展
export interface IInterceptor<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}
export interface requestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  //传入拦截器
  interceptors?: IInterceptor<T>;
}

export interface IRequest<T> {
  code: number;
  msg: string;
  data: T;
}
