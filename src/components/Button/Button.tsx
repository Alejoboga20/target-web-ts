import styles from './Button.module.scss';

export const Button = ({ label, disabled = false, type = 'button' }: ButtonProps) => {
	return (
		<button className={styles.button} type={type} disabled={disabled}>
			{label}
		</button>
	);
};

interface ButtonProps {
	label: string;
	disabled?: boolean;
	type?: 'button' | 'reset' | 'submit';
}
