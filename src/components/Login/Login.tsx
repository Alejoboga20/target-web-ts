import { LoginForm, LoginMsg, LoginLinks } from './';
import styles from './Login.module.scss';

export const Login = () => {
	return (
		<div className={styles.login}>
			<LoginMsg />
			<LoginForm />
			<LoginLinks />
		</div>
	);
};
