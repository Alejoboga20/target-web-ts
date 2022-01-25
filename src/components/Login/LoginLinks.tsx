import { Link } from 'react-router-dom';
import { routePaths } from 'router';
import useTranslation from 'hooks/useTranslation';
import styles from './LoginForm.module.scss';

export const LoginLinks = () => {
	const t = useTranslation();

	return (
		<div className={styles.login__links}>
			<div className={styles.login__linksFacebook}>
				<a>{t('signin.facebookLink')}</a>
			</div>
			<hr />
			<Link to={routePaths.signup}>{t('signin.signupLink')}</Link>
		</div>
	);
};
