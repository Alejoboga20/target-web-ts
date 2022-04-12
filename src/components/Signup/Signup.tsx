import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context';
import { Button, InputText, Select } from 'components';
import { genderOptions } from 'constants/constants';
import { routePaths } from 'router/index';
import { signupSchema } from 'schemas/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupFormInput } from 'interfaces/Auth/Auth';
import useTranslation from 'hooks/useTranslation';
import styles from './Signup.module.scss';

export const Signup = () => {
	const {
		authState: { error },
		isLoading,
		signUp,
		dispatch,
	} = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<SignupFormInput>({ mode: 'onTouched', resolver: yupResolver(signupSchema) });

	const onSubmit: SubmitHandler<SignupFormInput> = async (signupData) => {
		signUp({ ...signupData });
	};

	const t = useTranslation();

	useEffect(() => {
		dispatch({ type: 'cleanErrors' });
	}, []);

	return (
		<div className={styles.signup}>
			<h1 className={styles.signup__title}>{t('signup.title')}</h1>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.signup__form}>
				<InputText
					label='NAME'
					type='text'
					register={register}
					name='username'
					error={errors.username?.message}
				/>

				<InputText
					label='EMAIL'
					type='email'
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

				<InputText
					label='CONFIRM PASSWORD'
					type='password'
					register={register}
					name='passwordConfirmation'
					error={errors.passwordConfirmation?.message}
				/>

				<Select
					label='GENDER'
					name='gender'
					options={genderOptions}
					register={register}
					error={errors.gender?.message}
				/>

				<Button label='SIGN UP' type='submit' disabled={isLoading} />
				{error && <small className={styles.signup__error}>{error}</small>}

				<hr />
				<Link to={routePaths.signin}>{t('signup.signinLink')}</Link>
			</form>
		</div>
	);
};
