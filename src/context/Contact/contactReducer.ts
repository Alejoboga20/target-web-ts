import { IContact } from 'interfaces';
import { inititialState } from './ContactProvider';

type ContactAction =
	| { type: '[Contact] - Open Contact Modal' }
	| { type: '[Contact] - Close Contact Modal' }
	| { type: '[Contact] - Clean Create Question Form' }
	| { type: '[Contact] - Start Create Question' }
	| { type: '[Contact] - Finish Create Question'; payload?: number };

export const contactReducer = (state: IContact.ContactState, action: ContactAction) => {
	switch (action.type) {
		case '[Contact] - Open Contact Modal':
			return {
				...state,
				isContactModalOpen: true,
			};

		case '[Contact] - Close Contact Modal':
			return {
				...state,
				isContactModalOpen: false,
			};

		case '[Contact] - Clean Create Question Form':
			return {
				...inititialState,
			};

		case '[Contact] - Start Create Question':
			return {
				...state,
				isLoading: true,
			};

		case '[Contact] - Finish Create Question':
			return {
				...state,
				isLoading: false,
				isError: !(action.payload === 200),
				isSuccess: action.payload === 200,
			};

		default:
			return { ...state };
	}
};
