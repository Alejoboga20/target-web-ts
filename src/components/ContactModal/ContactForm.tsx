import { useContext } from 'react';
import useTranslation from 'hooks/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ContactContext } from 'context';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { Button, InputText, TextArea } from 'components';
import { contactSchema } from 'schemas/contact';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
	const t = useTranslation();
	const { createQuestion, isLoading, isError, isSuccess, handleCloseContactModal } =
		useContext(ContactContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormInput>({ mode: 'onTouched', resolver: yupResolver(contactSchema) });

	const onSubmit: SubmitHandler<ContactFormInput> = ({ email, body }) =>
		createQuestion(email, body);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.form__close} onClick={handleCloseContactModal}>
				X
			</div>

			<div className={styles.form__row}>
				<Smilies />
				<h3>{t('contact.title')}</h3>
			</div>

			{isSuccess ? (
				<h3>{t('contact.successMsg')}</h3>
			) : isError ? (
				<h3>{t('contact.successMsg')}</h3>
			) : (
				<>
					<div className={styles.form__row}>
						<InputText
							error={errors.email?.message}
							label='EMAIL'
							name='email'
							register={register}
						/>
					</div>

					<div className={styles.form__row}>
						<TextArea
							error={errors.body?.message}
							label='MESSAGE'
							name='body'
							register={register}
						/>
						<Button label={t('contact.button')} type='submit' disabled={isLoading} />
					</div>
				</>
			)}
		</form>
	);
};

interface ContactFormInput {
	email: string;
	body: string;
}
