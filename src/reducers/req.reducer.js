import { reqConst } from "../actions/constants";

const initState = {
    requestListA: [],
    requestListP: [],
    requestListR: [],
    updatedReq: [],
    rejectedReq: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case reqConst.REQA_SUCCESS:
            state = {
                ...state,
                requestListA: action.payload.requestListA
            }
            break;
        case reqConst.REQP_SUCCESS:
            state = {
                ...state,
                requestListP: action.payload.requestListP
            }
            break;
        case reqConst.REQR_SUCCESS:
            state = {
                ...state,
                requestListR: action.payload.requestListR
            }
            break;
        case reqConst.REQ_UPDATE_REQUEST:
            state = {
                ...state,
            }
            break;
        case reqConst.REQ_UPDATE_SUCCESS:
            state = {
                ...state,
                updatedReq: action.payload.updatedReq
            }
            break;
        case reqConst.REQ_UPDATE_FAILURE:
            state = {
                ...initState,
                error: action.payload.error
            }
            break;
        case reqConst.REQ_REJECT_REQUEST:
            state = {
                ...state,
            }
            break;
        case reqConst.REQ_REJECT_SUCCESS:
            state = {
                ...state,
                rejectedReq: action.payload.rejectedReq
            }
            break;
        case reqConst.REQ_REJECT_FAILURE:
            state = {
                ...initState,
                error: action.payload.error
            }
            break;
    }

    return state;
}

