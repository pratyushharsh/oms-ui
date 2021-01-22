import axios, { AxiosRequestConfig } from "axios";
import { OrderSearchResult } from "../store/search/types";

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

export async function searchOrdersApi(orderSearchCriteria: string): Promise<OrderSearchResult[]> {
    const body = {
        "order_no": orderSearchCriteria
    }

    const config: AxiosRequestConfig = {
        baseURL: SIT_URL,
        url: `/order/query`,
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
        const data: any[] = result.data;
        return data.map((t, idx) => {
            return {
                'orderId': t.order_no,
                'orderDate': t.order_date,
                'customerId': t.customer_id,
                'customerName': t.customer_name,
                'orderType': t.order_type,
                'orderStatus': t.order_status,
                'orderTotal': t.order_total
            }
        });
    } else {
        throw new Error('Order Does Not Exist');
    }
}