import styles from './Button.module.scss';

export const Button = ({
	label,
	disabled = false,
	type = 'button',
	onClick = () => {},
}: ButtonProps) => {
	return (
		<button className={styles.button} type={type} disabled={disabled} onClick={onClick}>
			{label}
		</button>
	);
};

interface ButtonProps {
	label: string;
	disabled?: boolean;
	type?: 'button' | 'reset' | 'submit';

	onClick?: () => void;
}
