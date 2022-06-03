import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'


export const LoginPage = () => {


	const dispatch = useDispatch()

	const [formValues, , handleInputChange] = useForm({
		email: '',
		password: ''
	})
	
	const {email, password} = formValues;

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(startLoginEmailPassword(email,password))
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin())
	}
	return (
	  <>
		<h3 className='auth__title'>Login Page</h3>
		<form onSubmit={handleLogin}>
			<input 
				type='text'
				placeholder='Email'
				name='email'
				className='auth__input'
				autoComplete='off'
				value={ email}
				onChange = {handleInputChange}
				/>
			<input 
				type='password'
				placeholder='Password'
				name='password'
				className='auth__input'
				value={ password }
				onChange = {handleInputChange}		
			/>
			<button
				className='btn btn-primary btn-block'
				type='submit'>
				Login
			</button>
			<hr/>
			<div className='auth__social-network'>
				<p>Login with Google</p>
				<div 
    				className="google-btn"
					onClick={ handleGoogleLogin }
				  >
					  <div className="google-icon-wrapper">
						  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
					  </div>
					  <p className="btn-text">
						  <b>Sign in with Google</b>
					  </p>
				  </div>
			</div>
			<Link to='/auth/register' className='link'>
				Create new account
			</Link>
		</form>
	  </>
  )
}
