import { combineReducers, 
    legacy_createStore as createStore,
    applyMiddleware } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { orderReducer } from "./orderReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    products : productReducer,
    cart : cartReducer,
    auth : authReducer,
    orders : orderReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;