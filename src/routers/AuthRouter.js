import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../componentes/auth/LoginPage'
import { RegisterPage } from '../componentes/auth/RegisterPage'

export const AuthRouter = () => {
  return (
	<div className='auth__main'>
		<div className='auth__box-container'>
			<Routes>
				<Route 
					path='/auth/login'
					element={<LoginPage/>}
				/>
				<Route 
					path='auth/register'
					element={<RegisterPage/>}
				/>
				<Route 
					path='*'
					element={<Navigate to='/auth/login' replace/>}
				/>
			</Routes>
		</div>
	</div>
  )
}
