import { SignupForm } from './';
import useTranslation from 'hooks/useTranslation';
import styles from './Signup.module.scss';

export const Signup = () => {
	const t = useTranslation();

	return (
		<div className={styles.signup}>
			<h1 className={styles.signup__title}>{t('signup.title')}</h1>

			<SignupForm />
		</div>
	);
};
