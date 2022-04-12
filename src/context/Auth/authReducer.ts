import { AuthState } from '../../interfaces/Auth/Auth';

export type AuthAction =
	| { type: 'signInSuccess'; payload: { username: string } }
	| { type: 'signInFailure'; payload: { error: string } }
	| { type: 'signUpSuccess'; payload: { username: string } }
	| { type: 'signUpFailure'; payload: { error: string } }
	| { type: 'cleanErrors' };

export const authReducer = (state: AuthState, action: AuthAction) => {
	switch (action.type) {
		case 'signInSuccess':
			return {
				...state,
				isAuth: true,
				userName: action.payload.username,
			};
		case 'signInFailure':
			return {
				...state,
				error: action.payload.error,
			};

		case 'signUpSuccess':
			return {
				...state,
				isAuth: true,
				userName: action.payload.username,
			};
		case 'signUpFailure':
			return {
				...state,
				error: action.payload.error,
			};

		case 'cleanErrors':
			return {
				...state,
				error: '',
			};

		default:
			return state;
	}
};
