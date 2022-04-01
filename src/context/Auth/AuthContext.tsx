import { createContext, useReducer, useState } from 'react';
import { authReducer } from './authReducer';
import { endpoints } from '../../constants/constants';
import { AuthContextProps, AuthState, SignInResponse } from '../../interfaces/Auth/Auth';
import targetApi from '../../apis/targetApi';

export const authInitialState: AuthState = {
	isAuth: false,
	error: '',
	userName: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState);
	const [isLoading, setIsLoading] = useState(false);

	const singIn = async (email: string, password: string) => {
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

	return (
		<AuthContext.Provider value={{ authState, singIn, isLoading }}>{children}</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
