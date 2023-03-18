import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addProduct } from '../Redux/productReducer/action'

const initState = {
    image: '',
    title: '',
    price: '',
    brand: '',
    discount: '',
    category: '',
}

export const Admin = () => {
    const [product, setProduct] = useState(initState)
    const dispatch = useDispatch()
    const handleChagne = (e) => {
        const { name, value } = e.target;

        setProduct((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(initState)
    }

    return (
        <DIV>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name="image" value={product.image} placeholder='Image' onChange={(e) => { handleChagne(e) }} />
                <input type='text' name="title" value={product.title} placeholder='Title' onChange={(e) => { handleChagne(e) }} />
                <input type='number' name="price" value={product.price} placeholder='Price' onChange={(e) => { handleChagne(e) }} />
                <input type='text' name="brand" value={product.brand} placeholder='Brand' onChange={(e) => { handleChagne(e) }} />
                <input type='text' name="discount" value={product.discount} placeholder='Discount' onChange={(e) => { handleChagne(e) }} />
                <select name='category' onChange={(e) => { handleChagne(e) }}>
                    <option value="">Select Category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kid">Kid</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </DIV>
    )
}


const DIV = styled.div`
    border: 1px solid black;
    width: 400px;
    margin: 40px auto;
    padding: 20px;


    form{
        display:flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
        align-items: center;
    }

    input {
        border: 1px solid gray;
        width: 80%;
        height: 20px;
        font-size: large;
        padding: 10px;
    }

    select {
        border: 1px solid gray;
        width: 50%;
        height: 30px;
        font-size: large;
    }

    button {
        border: 1px solid gray;
        width: 20%;
        height: 35px;
        font-size:large;
    }
` 