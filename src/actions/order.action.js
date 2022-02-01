import { orderConst } from "./constants";
import axiosInstance from "../helpers/axios"

export const getAllOrder = () => {
    return async (dispatch) => {
        dispatch({ type: orderConst.GET_ORDER_REQUEST });
        const res = await axiosInstance.get(`/admin/getorder`)
        if (res.status === 200) {
            const { orders } = res.data;
            dispatch({
                type: orderConst.GET_ORDER_SUCCESS,
                payload: {orderList: orders}
            })
        } else {
            dispatch({
                type: orderConst.GET_ORDER_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}


export const updateReq = (updatedProduct) => {
    return async (dispatch) => {
        dispatch({ type: orderConst.UPDATE_PRODUCT_REQUEST });
        const res = await axiosInstance.post(`admin/product/update`, updatedProduct)
        if(res.status === 201){
            dispatch({
                type: orderConst.UPDATE_PRODUCT_SUCCESS,
                payload: res.data
            })
            dispatch(getAllOrder());
        }else{
            dispatch({
                type: orderConst.UPDATE_PRODUCT_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}


export const updateOrder = (newOrder) => {
    return async (dispatch) => {
        dispatch({ type: orderConst.UPDATE_ORDER_REQUEST });
        const res = await axiosInstance.post(`admin/order/update`, newOrder)
        if(res.status === 201){
            dispatch({
                type: orderConst.UPDATE_ORDER_SUCCESS,
                payload: res.data
            })
            dispatch(getAllOrder());
        }else{
            dispatch({
                type: orderConst.UPDATE_ORDER_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}