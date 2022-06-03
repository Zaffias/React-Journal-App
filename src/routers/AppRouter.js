import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { JournalPage } from '../componentes/journal/JournalPage'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
	<Routes>
		<Route
			path='/auth'
			element={<AuthRouter/>}
		/>
		<Route
			path='/'
			element={<JournalPage/>}
			/>
		<Route 
			path='*'
			element={<AuthRouter/>}
		/>
	</Routes>
  )
}
