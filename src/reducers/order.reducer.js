import { orderConst } from "../actions/constants"

const initState = {
    orderList: [],
    updatedProduct: [],
    updatedOrder: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case orderConst.GET_ORDER_REQUEST:
            state = {
                ...state,
            }
            break;
        case orderConst.GET_ORDER_SUCCESS:
            state = {
                ...state,
                orderList: action.payload.orderList
            }
            break;
        case orderConst.GET_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            }
            break;
        case orderConst.UPDATE_PRODUCT_REQUEST:
            state = {
                ...state,
            }
            break;
        case orderConst.UPDATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                updatedProduct: action.payload
            }
            break;
        case orderConst.UPDATE_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            }
            break;
        case orderConst.UPDATE_ORDER_REQUEST:
            state = {
                ...state,
            }
            break;
        case orderConst.UPDATE_ORDER_SUCCESS:
            state = {
                ...state,
                updatedOrder: action.payload
            }
            break;
        case orderConst.UPDATE_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            }
            break;
    }

    return state;
}