const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, isAuthenticated: true, user: action.payload, error: null };
        case "LOGIN_FAILURE":
            return { ...state, isAuthenticated: true, user: null, error: action.payload };
        case "LOGOUT":
            return { ...state, isAuthenticated: false, user: null, error: null };
        default:
            return state;
    }
}