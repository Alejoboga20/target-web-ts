import { useContext } from 'react';
import Modal from 'react-modal';
import useTranslation from 'hooks/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ContactContext } from 'context';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { Button, InputText, TextArea } from 'components';
import { contactSchema } from 'schemas/contact';
import styles from './ContactModal.module.scss';

Modal.setAppElement('#root');

export const ContactModal = () => {
	const t = useTranslation();
	const { isContactModalOpen, handleCloseContactModal, createQuestion, isLoading } =
		useContext(ContactContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormInput>({ mode: 'onTouched', resolver: yupResolver(contactSchema) });

	const onSubmit: SubmitHandler<ContactFormInput> = ({ email, body }) =>
		createQuestion(email, body);

	return (
		<Modal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.form__row}>
					<Smilies />

					<h3>{t('contact.title')}</h3>
				</div>

				<div className={styles.form__row}>
					<InputText error={errors.email?.message} label='EMAIL' name='email' register={register} />
				</div>

				<div className={styles.form__row}>
					<TextArea error={errors.body?.message} label='MESSAGE' name='body' register={register} />
					<Button label={t('contact.button')} type='submit' disabled={isLoading} />
				</div>
			</form>
		</Modal>
	);
};

interface ContactFormInput {
	email: string;
	body: string;
}
