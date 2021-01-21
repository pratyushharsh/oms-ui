import axios, { AxiosRequestConfig } from "axios";

const SIT_URL = 'https://dry-brook-53479.herokuapp.com/'
// const LOCAL_URL = 'http://localhost:3001/'
// const SIT_2 = 'https://488b0e5155d6.ngrok.io';

export async function orderDetailApiSearch(orderId: string) {

    const body = {
        "order_no": orderId
    }

    const config: AxiosRequestConfig = {
        baseURL: SIT_URL,
        url: `/order/search`,
        method: 'POST',
        data: body,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json; charset=utf-8"
        }
    }
    const result = await axios.request(config);
    if (result.status === 200) {
        return result.data;
    } else {
        throw new Error('Order Does Not Exist');
    }
}