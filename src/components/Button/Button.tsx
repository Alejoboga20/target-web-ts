import styles from './Button.module.scss';

export const Button = ({ label, type = 'button' }: ButtonProps) => {
	return (
		<button className={styles.button} type={type}>
			{label}
		</button>
	);
};

interface ButtonProps {
	label: string;
	type?: 'button' | 'reset' | 'submit';
}
