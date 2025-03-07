/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "./axiosInstances";

// Funcion enviando los header para el middleware
// export const getDataApi = (url: string) => {
//     return axiosInstance.get(url, {headers: {propiedad: ''}}).then(response => {
//         return response.data;
//     })
// }
export const getDataApi = async (url: string) => {
    try {
        return await axiosInstance.get(url).then((response) => {
            return response.data;
        });
    } catch (err) {
        return err
    }
};
export const postDataApi = async (url: string, body: any) => {
    try {
        return await axiosInstance.post(url, body).then((response) => {
            return response.data;
        });
    } catch (err: any) {
        return err.response.data
    }
};
export const putDataApi = async (url: string, body: any) => {
    try {
        return await axiosInstance.put(url, body).then((response) => {
            return response.data;
        });
    }
    catch (err) {
        return err
    }
};
export const deleteDataApi = async (url: string) => {
    try {
        return await axiosInstance.get(url).then((response) => {
            return response.data;
        });
    }
    catch (err) {
        return err
    }
};
