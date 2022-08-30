import { AuthState } from '../../interfaces/Auth/Auth';

export type AuthAction =
	| { type: 'signInSuccess'; payload: { uid: string; client: string; token: string } }
	| { type: 'signInFailure'; payload: { error: string } }
	| { type: 'signUpSuccess'; payload: { uid: string; client: string; token: string } }
	| { type: 'signUpFailure'; payload: { error: string } }
	| { type: 'cleanErrors' };

export const authReducer = (state: AuthState, action: AuthAction) => {
	switch (action.type) {
		case 'signInSuccess':
			return {
				...state,
				...action.payload,
				isAuth: true,
			};
		case 'signInFailure':
			return {
				...state,
				error: action.payload.error,
			};

		case 'signUpSuccess':
			return {
				...state,
				...action.payload,
				isAuth: true,
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
