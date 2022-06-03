import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { setError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';
export const RegisterPage = () => {

	const dispatch = useDispatch()
	
	const state = useSelector( state => state.ui ) 

	const { msgError, loading } = state
	
	const [value, ,handleInputChange] = useForm({
		name: 'Michael',
		email: 'michael@afaf.com',
		password: '123456',
		confirm: '123456'
	})
	const {name, password, email, confirm} = value

	const handleSignUp  = (e) => {
		e.preventDefault()
		if(isFormValid()){
			dispatch(startRegisterEmailPassword(email, password, name))
		}
	}

	const isFormValid = () => {
		
		if(name.trim().length === 0){
			dispatch(setError('name is required'))
			return false
		}
		if(!validator.isEmail(email)){
			dispatch(setError('proper mail please'))
			return false
		}
		if(password !== confirm || password.length < 5){
			dispatch(setError('password do no coincide'))
			return false
		}
		return true
	}

  return (
	<>
	<h3 className='auth__title'>Register</h3>
	<form onSubmit={ handleSignUp }>

		{
		msgError &&
		<div className='auth__alert-error'>
			{msgError}
		</div>
		}
		<input 
			type='text'
			placeholder='Name'
			name='name'
			className='auth__input'
			autoComplete='off'
			value={name}
			onChange={handleInputChange}
			/>
		<input 
			type='text'
			placeholder='Email'
			name='email'
			className='auth__input'
			autoComplete='off'
			value={email}
			onChange={handleInputChange}
		/>
		<input 
			type='password'
			placeholder='Password'
			name='password'
			className='auth__input'
			value={password}
			onChange={handleInputChange}
		/>
		<input 
			type='password'
			placeholder='Confirm password'
			name='confirm'
			className='auth__input'
			value={confirm}
			onChange={handleInputChange}
		/>
		<button
			className='btn btn-primary btn-block mb-5'
			type='submit'>
			Register
		</button>
		
		<Link to='/auth/login' className='link'>
			Already registered?
		</Link>
	</form>
  </>
  )
}
