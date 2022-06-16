import { useState } from 'react';
import { ContactContext } from './ContactContext';

export const ContactProvider = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const handleOpenContactModal = () => setIsContactModalOpen(true);
	const handleCloseContactModal = () => setIsContactModalOpen(false);

	return (
		<ContactContext.Provider
			value={{ isContactModalOpen, handleOpenContactModal, handleCloseContactModal }}
		>
			ContactProvider
		</ContactContext.Provider>
	);
};
