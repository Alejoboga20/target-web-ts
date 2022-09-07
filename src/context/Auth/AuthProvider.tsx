import { useReducer, useState } from 'react';

import { authReducer } from './authReducer';
import { endpoints } from 'constants/constants';
import {
	LoginFormInput,
	SignInResponse,
	SignupFormInput,
	SignUpResponse,
	AuthState,
} from 'interfaces/Auth/Auth';
import { AuthContext } from './AuthContext';
import targetApi from 'apis/targetApi';

export const authInitialState: AuthState = {
	isAuth: false,
	error: '',
	uid: '',
	client: '',
	token: '',
};

const stateInitializer = (): AuthState => {
	const storagedState = localStorage.getItem('session');

	if (!storagedState) return authInitialState;

	const storagedAuthState = JSON.parse(storagedState) as AuthState;

	return { ...storagedAuthState, isAuth: true };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState, stateInitializer);
	const [isLoading, setIsLoading] = useState(false);

	const singIn = async ({ email, password }: LoginFormInput) => {
		setIsLoading(true);

		try {
			const { data, headers } = await targetApi.post<SignInResponse>(endpoints.signIn, {
				user: { email, password },
			});

			dispatch({
				type: 'signInSuccess',
				payload: {
					uid: data.data.uid,
					client: headers['client'],
					token: headers['access-token'],
				},
			});
		} catch (error: any) {
			dispatch({
				type: 'signInFailure',
				payload: {
					error: error.response.data.errors[0],
				},
			});
		} finally {
			setIsLoading(false);
		}
	};

	const signUp = async ({
		email,
		username,
		password,
		passwordConfirmation,
		gender,
	}: SignupFormInput) => {
		setIsLoading(true);

		try {
			const { data, headers } = await targetApi.post<SignUpResponse>(endpoints.singUp, {
				user: { email, password, passwordConfirmation, username, gender },
			});

			dispatch({
				type: 'signUpSuccess',
				payload: {
					uid: data.data.uid,
					client: headers['client'],
					token: headers['access-token'],
				},
			});
		} catch (error: any) {
			dispatch({
				type: 'signUpFailure',
				payload: {
					error: JSON.stringify(error.response.data.errors.full_messages[0], null, 4),
				},
			});
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async () => {
		setIsLoading(true);

		try {
			await targetApi.delete(endpoints.signOut, { data: {} });
			dispatch({ type: 'signOutSuccess' });
		} catch (error: any) {
			dispatch({
				type: 'signOutFailure',
				payload: {
					error: JSON.stringify(error.response.data.errors.full_messages[0], null, 4),
				},
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ authState, singIn, signUp, signOut, isLoading, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
