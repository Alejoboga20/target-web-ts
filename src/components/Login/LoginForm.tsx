import { Button, InputText } from 'components';
import { useLoginForm } from './useLoginForm';
import useTranslation from 'hooks/useTranslation';
import styles from './Login.module.scss';

export const LoginForm = () => {
	const t = useTranslation();
	const { error, errors, handleSubmit, onSubmit, register, isLoading } = useLoginForm();

	return (
		<form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
			<InputText
				label='EMAIL'
				type='text'
				register={register}
				name='email'
				error={errors.email?.message}
			/>
			<InputText
				label='PASSWORD'
				type='password'
				register={register}
				name='password'
				error={errors.password?.message}
			/>

			<Button label='SIGN IN' type='submit' disabled={isLoading} />
			{error && <small className={styles.login__error}>{error}</small>}

			<a>
				<small>{t('signin.forgotPassword')}</small>
			</a>
		</form>
	);
};
