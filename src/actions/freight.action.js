import axiosInstance from "../helpers/axios"
import { freightConst } from "./constants";

export const getFreight = () => {
    return async dispatch => {

        dispatch({ type: freightConst.FREIGHT_REQUEST });

        const res = await axiosInstance.get(`/freight/get`);
        console.log(res);
        if(res.status === 200){

            const { freights } = res.data;

            dispatch({
                type: freightConst.FREIGHT_SUCCESS,
                payload: { freightList: freights }
            });
        }else{
            dispatch({
                type: freightConst.FREIGHT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


export const addFreight = (form) => {
    return async dispatch => {
        dispatch({ type: freightConst.ADD_FREIGHT_REQUEST });
        const res = await axiosInstance.post(`freight/create`, form);
        if(res.status === 201){
            dispatch({
                type: freightConst.ADD_FREIGHT_SUCCESS,
                payload: res.data.freight
            });
        }else{
            dispatch({
                type: freightConst.ADD_FREIGHT_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}



export const updateFreight = (upFreight) => {
    return async dispatch => {
        const res = await axiosInstance.post(`freight/update`, upFreight);
        if(res.status === 201){
            console.log(res);
        }else{
            console.log(res);
        }
    }
}

// export const deleteFreightByID = (payload) => {
//     return async dispatch => {
//         await axiosInstance.post(`freight/delete`, payload)
//         dispatch(getFreight());
//     }
// }