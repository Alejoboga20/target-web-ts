import { Button, InputText } from 'components';
import useTranslation from 'hooks/useTranslation';
import styles from './Login.module.scss';

export const LoginForm = () => {
	const t = useTranslation();

	return (
		<form className={styles.login__form}>
			<InputText label='EMAIL' />
			<InputText label='PASSWORD' />

			<Button label='SIGN IN' />
			<a>
				<small>{t('signin.forgotPassword')}</small>
			</a>
		</form>
	);
};
