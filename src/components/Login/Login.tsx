import { LoginForm, LoginMsg, LoginLinks } from './';
import styles from './LoginForm.module.scss';

export const Login = () => {
	return (
		<div className={styles.login}>
			<LoginMsg />
			<LoginForm />
			<LoginLinks />
		</div>
	);
};
