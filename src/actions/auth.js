import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { type } from "@testing-library/user-event/dist/type"

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(()=> {
			dispatch(login(email, password));
		},3500)
	}
}

export const startRegisterEmailPassword = (email, name, password) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword( email, password )
		.then(async ({user}) => {
			await user.updateProfile({
				displayName: name
			})

			dispatch(
				login(user.uid, user.displayName)
			)
		}).catch(( err )=>{
			console.error(err)
		})

	}
}

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName
		}
	}
}

export const startGoogleLogin = () => {
	return ( dispatch ) => {
		firebase.auth().signInWithPopup( googleAuthProvider)
		.then(({ user }) => {
			dispatch(login(user.uid, user.displayName))
		} )
	}
}