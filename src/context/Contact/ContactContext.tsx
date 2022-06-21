import { createContext } from 'react';

interface ContactContextProps {
	isContactModalOpen: boolean;
	handleOpenContactModal: () => void;
	handleCloseContactModal: () => void;
	isLoading: boolean;
	createQuestion: (email: string, body: string) => void;
}

export const ContactContext = createContext({} as ContactContextProps);
