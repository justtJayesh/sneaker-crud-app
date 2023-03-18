import { Button, FormControl, Heading, Input, Select, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { editProduct } from '../Redux/productReducer/action'

export const EditPage = () => {
  // getting the {id} from the URL using useParams hook
  const { id } = useParams()
  // get products data from the store
  const product = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch()
  const [data, setData] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleEdit = (e) => {
    e.preventDefault()
    // console.log(data)
    dispatch(editProduct(data, id))
  }

  useEffect(() => {
    const data = product.find((item) => item.id === +id)
    // console.log(data)
    setData(data)
  }, [])

  return (
    <DIV>
      <Heading fontSize={'x-large'} margin='5'>Edit Products: {id}</Heading>
      <form onSubmit={handleEdit}>

        <input type='text' name="image" onChange={handleChange} value={data.image} />
        <input type='text' name={"title"} onChange={handleChange} value={data.title} />
        <input type='number' name={"price"} onChange={handleChange} value={data.price} />
        <input type='text' name={"brand"} onChange={handleChange} value={data.brand} />
        <input type='number' name={"discount"} onChange={handleChange} value={data.discount} />
        <select placeholder='Select option' name={'category'} onChange={handleChange} value={data.category}>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
        <button type='submit'>Edit</button>

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