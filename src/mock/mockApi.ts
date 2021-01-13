import { OrderStatusEnum } from './../store/search/types';
import { OrderSearchResult, OrderTypeEnum } from "../store/search/types";

const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
};

export async function searchOrders(orderSearchCriteria: string): Promise<OrderSearchResult[]> {
    await new Promise(r => setTimeout(r, 1000));
    const rand = Math.floor(Math.random() * 30);
    var res: OrderSearchResult[] = [];
    for (var i = 0; i < rand; i++) {
        var t: OrderSearchResult = {
            orderId: random(10),
            orderDate: new Date(),
            customerId: random(8),
            orderType: OrderTypeEnum.FORWARD,
            orderStatus: OrderStatusEnum.INPROGRESS,
            amountDue: Math.floor(Math.random() * (1000 - 100) + 100) / 100
        }
        res.push(t);
    }
    return res;
}