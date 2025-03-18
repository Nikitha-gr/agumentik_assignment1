const initialState = {
    orders : [],
    loading: false,
    error:null,
}

export const orderReducer = (state = initialState,action) => {
    switch(action.type) {
        case "PLACE_ORDER_SUCCESS":
            return {...state, orders: [...state.orders,action.payload]};
        case "PLACE_ORDER_FAILURE":
            return {...state, error:action.payload};
        default:
            return state;
    }
}