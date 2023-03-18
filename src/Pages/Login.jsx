import styled from "styled-components"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/authReducer/action"
import { useLocation, useNavigate } from "react-router-dom"


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { isAuth } = useSelector((store) => store.authReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData)).then(() => {
            navigate(location.state, { replace: true })
        })

        setEmail('')
        setPassword('')
    }

    return (
        <DIV>
            <h1>User Login</h1>
            <h2>{isAuth ? "Login Successful" : "Login To Continue"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
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

    button {
        width: 20%;
        height: 35px;
        border: 1px solid gray;
    }
`


