import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}

export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case ADD_PRODUCT_SUCCESS:
            return {...state, isLoading:false}
        case GET_PRODUCT_SUCCESS:
            return  {...state, isLoading:false, products: payload}
        case PRODUCT_FAILURE:
            return {...state, isLoading:false, isError: true}
        case PATCH_PRODUCT_SUCCESS:
            return {...state, isLoading:false}
        default:
            return state 
    }
}