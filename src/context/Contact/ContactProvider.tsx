import { useReducer } from 'react';

import targetApi from 'apis/targetApi';
import { ContactContext } from './ContactContext';
import { endpoints } from 'constants/constants';
import { contactReducer } from './contactReducer';
import { IContact } from 'interfaces';

export const inititialState: IContact.ContactState = {
	isContactModalOpen: false,
	isLoading: false,
	isError: false,
	isSuccess: false,
};

export const ContactProvider = ({ children }: ContactProviderProps) => {
	const [state, dispatch] = useReducer(contactReducer, inititialState);

	const handleCloseContactModal = () => {
		dispatch({ type: '[Contact] - Clean Create Question Form' });
		dispatch({ type: '[Contact] - Close Contact Modal' });
	};
	const handleOpenContactModal = () => dispatch({ type: '[Contact] - Open Contact Modal' });

	const createQuestion = async (email: string, body: string) => {
		let response;
		dispatch({ type: '[Contact] - Start Create Question' });

		try {
			response = await targetApi.post(endpoints.questions, { email, body });
		} catch (error) {
			throw new Error('An error has ocurred');
		} finally {
			dispatch({ type: '[Contact] - Finish Create Question', payload: response?.status });
		}
	};

	return (
		<ContactContext.Provider
			value={{
				...state,
				createQuestion,
				handleCloseContactModal,
				handleOpenContactModal,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

interface ContactProviderProps {
	children: JSX.Element | JSX.Element[];
}
