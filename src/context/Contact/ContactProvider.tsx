import { useState } from 'react';
import { ContactContext } from './ContactContext';

export const ContactProvider = ({ children }: ContactProviderProps) => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const handleOpenContactModal = () => setIsContactModalOpen(true);
	const handleCloseContactModal = () => setIsContactModalOpen(false);

	return (
		<ContactContext.Provider
			value={{ isContactModalOpen, handleOpenContactModal, handleCloseContactModal }}
		>
			{children}
		</ContactContext.Provider>
	);
};

interface ContactProviderProps {
	children: JSX.Element | JSX.Element[];
}
