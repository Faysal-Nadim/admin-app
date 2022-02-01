import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import reqReducer from "./req.reducer"; 
import freightReducer from "./freight.reducer";
import orderReducer from "./order.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    request: reqReducer,
    freight: freightReducer,
    order: orderReducer
})

export default rootReducer;