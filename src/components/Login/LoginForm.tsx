import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, InputText } from 'components';
import { LoginFormInput } from 'interfaces/Auth/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'schemas/auth';
import { AuthContext } from 'context';
import useTranslation from 'hooks/useTranslation';
import styles from './Login.module.scss';

export const LoginForm = () => {
	const t = useTranslation();

	const {
		authState: { error },
		singIn,
		dispatch,
		isLoading,
	} = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInput>({ mode: 'onTouched', resolver: yupResolver(loginSchema) });

	const onSubmit: SubmitHandler<LoginFormInput> = ({ email, password }) => {
		singIn({ email, password });
	};

	useEffect(() => {
		dispatch({ type: 'cleanErrors' });
	}, []);

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
