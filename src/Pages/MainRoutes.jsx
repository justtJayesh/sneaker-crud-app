import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../Components/PrivateRoute'
import { Admin } from './Admin'
import { EditPage } from './EditPage'
import { Homepage } from './Homepage'
import { Login } from './Login'

export const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } />
                <Route path='/edit/:id' element={
                    <PrivateRoute>
                        <EditPage />
                    </PrivateRoute>
                } />
                <Route path='*' element={<h1>404 Page not found</h1>} />
            </Routes>
        </div>
    )
}
