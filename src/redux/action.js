import axios from "axios";

const BASE_URL = "https://obvious-bottlenose-giganotosaurus.glitch.me";

// Product Actions
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        console.log(response.data);
        dispatch({
            type: "FETCH_PRODUCTS_SUCCESS",
            payload: response.data
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: "FETCH_PRODUCTS_FAILURE",
            payload: error.message
        });
    }
}

// Cart Actions
export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product
});

export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id
});

export const clearCart = () => ({
    type:"CLEAR_CART"
});

// Auth Action

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        const users = response.data;

        const user = users.find(
            (user) => user.email == email && user.password === password
        );

        if(user) {
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:user
            });
        }
        else {
            dispatch({
                type:"LOGIN_FAILURE",
                payload:"Invalid credentials"
            })
        }
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.message
        })
    }
}

export const logoutUser = () => ({
    type: "LOGOUT"
});

// Order Actions

export const placeOrder = (orderData) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`,orderData);
        dispatch({
            type:"PLACE_ORDER_SUCCESS",
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type:"PLACE_ORDER_FAILURE",
            payload:error.message
        })
    }
}