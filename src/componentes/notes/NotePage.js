import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
  return (
	<div className='notes__main-content'>
		<NotesAppBar/>
		
			<div  className='notes__content'>
				<input
					type='text'
					placeholder='Titulo'
					className='notes__title-input'
					autoComplete='off'
				/>
				<textarea
					placeholder='Que has hecho hoy broski'
					className='notes__textarea'
				/>	
				<div className='notes__image'>
					<img
						src='https://mymodernmet.com/wp/wp-content/uploads/2022/02/international-landscape-photographer-awards-20.jpeg'
						alt='Imagen'
					/>
				</div>
			</div>
	</div>
  )
}
