import { AuthAction } from 'context/Auth/authReducer';

export interface SignInResponse {
	data: Data;
}

export interface SignUpResponse {
	data: Data;
}

export interface Data {
	id: number;
	email: string;
	uid: string;
	provider: string;
	avatar: Avatar;
	first_name: string;
	last_name: string;
	username: string;
	gender: string;
	push_token: null;
	allow_password_change: boolean;
}

export interface Avatar {
	url: null;
	normal: Normal;
	small_thumb: Normal;
}

export interface Normal {
	url: null;
}

export interface AuthState {
	isAuth: boolean;
	error?: string;
	uid: string;
	client: string;
	token?: string;
}

export interface AuthContextProps {
	authState: AuthState;
	isLoading: boolean;
	dispatch: React.Dispatch<AuthAction>;
	singIn: ({ email, password }: LoginFormInput) => void;
	signUp: ({ email, gender, username, password, passwordConfirmation }: SignupFormInput) => void;
}

export interface SignupFormInput {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	gender: Gender;
}

type Gender = 'Male' | 'Female' | 'Other';

export interface LoginFormInput {
	email: string;
	password: string;
}
