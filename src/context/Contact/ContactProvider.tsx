import targetApi from 'apis/targetApi';
import { useState } from 'react';
import { ContactContext } from './ContactContext';
import { endpoints } from '../../constants/constants';

export const ContactProvider = ({ children }: ContactProviderProps) => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleOpenContactModal = () => setIsContactModalOpen(true);
	const handleCloseContactModal = () => setIsContactModalOpen(false);

	const createQuestion = async (email: string, body: string) => {
		setIsLoading(true);

		try {
			const response = await targetApi.post(endpoints.questions, { email, body });

			console.log(response);
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ContactContext.Provider
			value={{
				isContactModalOpen,
				handleOpenContactModal,
				handleCloseContactModal,
				createQuestion,
				isLoading,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

interface ContactProviderProps {
	children: JSX.Element | JSX.Element[];
}
