import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next? : string | null;
    results: T[];
}
const axiosInstance =  axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {key:'0c4eab5dc098477abf31c6b851aca88f'}
})

class APIClient<T> {
    endpoint : string;

    constructor(endpoint : string) {
        this.endpoint = endpoint;
    }
    getAll = (config : AxiosRequestConfig) => {
         return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }

    get = (id : string | number) => axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data)
    
}

export default APIClient;