import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../Redux/productReducer/action'
import { ProductCard } from './ProductCard';


export const ProductList = () => {
    const [serarchParams] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const { products } = useSelector((store) => store.productReducer,
    )
    // console.log(location)
    // console.log(serarchParams.getAll("category"))
    let obj = {
        params: {
            category: serarchParams.getAll("category"),
            _sort: serarchParams.get("_order") && "price",
            _order: serarchParams.get("_order")
        }
    }

    useEffect(() => {
        dispatch(getProducts(obj))
    }, [location.search])

    return (
        <DIV>
            {
                products?.map((item) => {
                    return <ProductCard key={item.id} {...item} />
                })
            }
        </DIV>
    )
}


const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    /* width: 80%; */
    height: 680px;
    overflow-y: scroll;

    @media only screen and (max-width: 500px) {
    /* For mobile phones: */
        grid-template-columns: repeat(1, 1fr);
    }
`