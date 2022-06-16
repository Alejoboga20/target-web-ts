import { useContext } from 'react';
import Modal from 'react-modal';
import useTranslation from 'hooks/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ContactContext } from 'context';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { Button, InputText } from 'components';
import { contactSchema } from 'schemas/contact';

Modal.setAppElement('#root');

export const ContactModal = () => {
	const t = useTranslation();
	const { isContactModalOpen, handleCloseContactModal } = useContext(ContactContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormInput>({ mode: 'onTouched', resolver: yupResolver(contactSchema) });

	const onSubmit: SubmitHandler<ContactFormInput> = (data) => console.log(data);

	return (
		<Modal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Smilies />

				<h3>{t('contact.title')}</h3>

				<InputText error={errors.email?.message} label='EMAIL' name='email' register={register} />
				<InputText
					error={errors.message?.message}
					label='MESSAGE'
					name='message'
					register={register}
				/>

				<Button label={t('contact.button')} type='submit' />
			</form>
		</Modal>
	);
};

interface ContactFormInput {
	email: string;
	message: string;
}
