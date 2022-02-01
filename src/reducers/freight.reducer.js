import { freightConst } from "../actions/constants";

const initState = {
    freightList: [],
    loading: false,
    error: null
};


export default (state = initState, action) => {
    switch (action.type) {
        case freightConst.FREIGHT_SUCCESS:
            state = {
                ...state,
                freightList: action.payload.freightList
            }
            break;
        case freightConst.ADD_FREIGHT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case freightConst.ADD_FREIGHT_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case freightConst.ADD_FREIGHT_FAILURE:
            state = {
                ...initState
            }
            break;
    }
    return state;
}