import axios from 'axios'
import { PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from './actionTypes'


// post request
export const addProduct = (data) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.post('http://localhost:8080/products', data)
    .then((res)=>{
        dispatch({type: ADD_PRODUCT_SUCCESS})
    }).catch((err)=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}


// get request
export const getProducts = (paramObj) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products", paramObj)
    .then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

// patch request
export const editProduct = (dataObj, id) => (dispatch) =>{
    dispatch({type: PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/products/${id}`, dataObj)
    .then((res)=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    }).catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}