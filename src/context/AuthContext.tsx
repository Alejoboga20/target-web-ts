import { createContext } from 'react';

export interface AuthState {
	isAuth: boolean;
	userName: string;
}

export const authInitialState: AuthState = {
	isAuth: false,
	userName: '',
};

export interface AuthContextProps {
	authState: AuthState;
	singIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	return (
		<AuthContext.Provider value={{ authState: authInitialState, singIn: () => {} }}>
			{children}
		</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
