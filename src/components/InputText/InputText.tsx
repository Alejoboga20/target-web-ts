import { UseFormRegister } from 'react-hook-form';
import styles from './InputText.module.scss';

export const InputText = ({
	error = '',
	label = '',
	name,
	placeholder = '',
	register,
	type = 'text',
}: InputTextProps) => {
	return (
		<div className={styles.inputText}>
			{label && <span className={styles.inputText__label}>{label}</span>}

			<input
				className={`${styles.inputText__input} ${error && styles.inputText__inputError}`}
				placeholder={placeholder}
				type={type}
				{...register(name)}
			/>

			{error && <small className={styles.inputText__error}>{error}</small>}
		</div>
	);
};

interface InputTextProps {
	error?: string;
	label?: string;
	name: string;
	placeholder?: string;
	register: UseFormRegister<any>;
	type?: 'text' | 'password' | 'number';
}
