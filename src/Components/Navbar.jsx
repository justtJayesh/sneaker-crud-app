import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Heading } from '@chakra-ui/react'

export const Navbar = () => {
    return (
        <div style={{ border: "1px solid lightgray" }}>
            <DIV>
                <Heading>SNKR CRUD</Heading>
                <Button><Link to={'/'}>Home</Link></Button>
                <Button><Link to={'/login'}>Login</Link></Button>
                <Button><Link to={'/admin'}>Admin</Link></Button>
            </DIV>
        </div>
    )
}

const DIV = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    padding: 15px;
`