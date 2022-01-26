import { Button, InputText } from 'components';
import { useLoginForm } from './useLoginForm';
import useTranslation from 'hooks/useTranslation';
import styles from './Login.module.scss';

export const LoginForm = () => {
	const t = useTranslation();
	const { errors, handleSubmit, onSubmit, register } = useLoginForm();

	return (
		<form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
			<InputText label='EMAIL' register={register} name='email' error={errors.email?.message} />
			<InputText
				label='PASSWORD'
				type='password'
				register={register}
				name='password'
				error={errors.password?.message}
			/>

			<Button label='SIGN IN' type='submit' />
			<a>
				<small>{t('signin.forgotPassword')}</small>
			</a>
		</form>
	);
};
