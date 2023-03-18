
import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Sidebar = () => {
    const [serarchParams, setSearchParams] = useSearchParams()
    const initialCategory = serarchParams.getAll("category")
    const initialOrder = serarchParams.get("_order")
    const [category, setCategory] = useState(initialCategory || [])
    const [order, setOrder] = useState(initialOrder || '')

    // Filter functionality
    const handleChange = (e) => {

        let newCategory = [...category]
        let value = e.target.value

        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value)
        }

        setCategory(newCategory)
    }

    // Sort Functionality
    const handleSort = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        let params = {
            category,
        }
        order && (params._order = order)

        setSearchParams(params)
    }, [category, order])

    return (
        <div style={{ textAlign: 'left', width: '60%', margin: 'auto' }}>
            <Heading size="large">Filter</Heading>
            <Box h={1}></Box>
            <div>
                <input
                    type="checkbox"
                    value='men'
                    onChange={handleChange}
                    checked={category.includes("men")}
                />
                <label> Men</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value='women'
                    onChange={handleChange}
                    checked={category.includes("women")}
                />
                <label> Women</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value='kid'
                    onChange={handleChange}
                    checked={category.includes("kid")}
                />
                <label> Kids</label>
            </div>
            <br />
            <br />
            <Heading size="large">Sort by Price</Heading>
            <Box h={1}></Box>
            <div onChange={handleSort}>
                <div>
                    <input type="radio" name="order" value={"asc"} defaultChecked={order === "asc"}/>
                    <label> Ascending</label>
                </div>
                <div>
                    <input type="radio" name="order" value={"desc"} defaultChecked={order === "desc"}/>
                    <label> Descending</label>
                </div>
            </div>
        </div>
    )
}
