export interface SignInResponse {
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
	userName: string;
}

export interface AuthContextProps {
	authState: AuthState;
	isLoading: boolean;
	singIn: (email: string, password: string) => void;
}
