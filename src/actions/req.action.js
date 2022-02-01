import axiosInstance from "../helpers/axios"
import { reqConst } from "./constants";

export const pendingRequest = () => {
    return async dispatch => {
        dispatch({ type: reqConst.REQP_REQUEST });
        const res = await axiosInstance.get(`/get/request/pending`);
        console.log(res);
        if(res.status === 200){
            const { requests } = res.data;
            dispatch({
                type: reqConst.REQP_SUCCESS,
                payload: { requestListP: requests }
            });
        }else{
            dispatch({
                type: reqConst.REQP_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const approvedRequest = () => {
    return async dispatch => {
        dispatch({ type: reqConst.REQA_REQUEST });
        const res = await axiosInstance.get(`/get/request/approved`);
        if(res.status === 200){
            const { requests } = res.data;
            dispatch({
                type: reqConst.REQA_SUCCESS,
                payload: { requestListA: requests }
            });
        }else{
            dispatch({
                type: reqConst.REQA_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const rejectedRequest = () => {
    return async dispatch => {
        dispatch({ type: reqConst.REQR_REQUEST });
        const res = await axiosInstance.get(`/get/request/rejected`);
        console.log(res);
        if(res.status === 200){
            const { requests } = res.data;
            dispatch({
                type: reqConst.REQR_SUCCESS,
                payload: { requestListR: requests }
            });
        }else{
            dispatch({
                type: reqConst.REQR_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


export const upRequest = (form) => {
    return async (dispatch) => {
        dispatch({ type: reqConst.REQ_UPDATE_REQUEST })
        const res = await axiosInstance.post(`/request/update`, form)
        if(res.status === 201){
            const { upReq } = res.data;
            dispatch({
                type: reqConst.REQ_UPDATE_SUCCESS,
                payload: {updatedReq: upReq}
            })
        }else{
            dispatch({
                type: reqConst.REQ_UPDATE_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const rejectRequestByID = (form) => {
    return async (dispatch) => {
        dispatch({ type: reqConst.REQ_REJECT_REQUEST })
        const res = await axiosInstance.post(`/request/update/reject`, form)
        if(res.status === 201){
            const { rejected } = res.data; 
            dispatch({
                type: reqConst.REQ_REJECT_SUCCESS,
                payload: {rejectedReq: rejected}
            })
        }else{
            dispatch({
                type: reqConst.REQ_REJECT_FAILURE,
                payload: { error: res.data.error }
            })
        }
        console.log(res)
    }
}