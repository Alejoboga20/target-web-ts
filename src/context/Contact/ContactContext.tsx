import { createContext } from 'react';

interface ContactContextProps {
	isContactModalOpen: boolean;
	handleOpenContactModal: () => void;
	handleCloseContactModal: () => void;
}

export const ContactContext = createContext({} as ContactContextProps);
