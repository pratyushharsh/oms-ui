import { AddNewTabAction, DeleteTabAction, SelectTabAction, TabsActionTypes, UpdateTabAction } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { orderDetailApiSearch } from "../../api/orderDetailSearch";


export function searchForOrderDetail(orderId: string) {
    
}

export const deleteTab = (uuid: string) => (dispatch: any) => { 

    const tmp: DeleteTabAction = {
        type: TabsActionTypes.TAB_DELETE_TAB,
        uuid: uuid
    }

    dispatch(tmp)
}

export const selectTab = (index: number) => (dispatch: any) => {
    const select: SelectTabAction = {
        type: TabsActionTypes.TAB_SELECT_TAB,
        index: index
    }
    dispatch(select);
}

export const searchOrderDetail = (id: string) => async (dispatch: any) => {
    const uuid = uuidv4();
    try {
        const t: AddNewTabAction = {
            type: TabsActionTypes.TAB_ADD_TAB,
            payload: {
                uuid: uuid,
                isLoading: true,
                error: false,
                errorMessage: null,
                orderDetail: null
            }
        }
        dispatch(t)
        //const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const res = await orderDetailApiSearch(id);
        if (!res) {
            dispatch({
                type: TabsActionTypes.TAB_UPDATE_TAB,
                payload: {
                    uuid: uuid,
                    isLoading: false,
                    error: true,
                    errorMessage: `Cannot get the order detail for the order id ${id}`,
                    orderDetail: null
                } 
            })
            return;
        }
        const data: UpdateTabAction = {
            type: TabsActionTypes.TAB_UPDATE_TAB,
            payload: {
                uuid: uuid,
                isLoading: false,
                error: false,
                errorMessage: null,
                orderDetail: res,
            } 
        }
        dispatch(data);
    } catch (error) {
        console.error(`Error while loading the orderid ${id} ${error}`);
        dispatch({
            type: TabsActionTypes.TAB_UPDATE_TAB,
            payload: {
                uuid: uuid,
                isLoading: false,
                error: true,
                errorMessage: `Cannot get the order detail for the order id ${id}`,
                orderDetail: null
            }
        })
    }
}