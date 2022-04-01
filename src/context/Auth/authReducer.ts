import { AuthState } from '../../interfaces/Auth/Auth';

type AuthAction =
	| { type: 'signInSuccess'; payload: { username: string } }
	| { type: 'signInFailure'; payload: { error: string } };

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

		default:
			return state;
	}
};
