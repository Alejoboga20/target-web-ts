import { createContext, useReducer, useState } from 'react';
import { authReducer } from './authReducer';
import { endpoints } from 'constants/constants';
import {
	AuthContextProps,
	AuthState,
	LoginFormInput,
	SignInResponse,
	SignupFormInput,
	SignUpResponse,
} from 'interfaces/Auth/Auth';

import targetApi from 'apis/targetApi';

export const authInitialState: AuthState = {
	isAuth: false,
	error: '',
	userName: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState);
	const [isLoading, setIsLoading] = useState(false);

	const singIn = async ({ email, password }: LoginFormInput) => {
		setIsLoading(true);

		try {
			const response = await targetApi.post<SignInResponse>(endpoints.signIn, {
				user: { email, password },
			});

			dispatch({
				type: 'signInSuccess',
				payload: {
					username: response.data.data.username,
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
			const { data } = await targetApi.post<SignUpResponse>(endpoints.singUp, {
				user: { email, password, passwordConfirmation, username, gender },
			});

			dispatch({
				type: 'signUpSuccess',
				payload: {
					username: data.username,
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

	return (
		<AuthContext.Provider value={{ authState, singIn, signUp, isLoading, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
