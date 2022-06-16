import Modal from 'react-modal';
import { useContext } from 'react';

import { ContactContext } from 'context';

Modal.setAppElement('#root');

export const ContactModal = () => {
	const { isContactModalOpen, handleCloseContactModal } = useContext(ContactContext);

	return (
		<Modal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal}>
			Contact
		</Modal>
	);
};
