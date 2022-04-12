import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from 'context';
import * as yup from 'yup';

const loginSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInput>({ mode: 'onTouched', resolver: yupResolver(loginSchema) });

	const {
		authState: { error },
		singIn,
		isLoading,
	} = useContext(AuthContext);

	const onSubmit: SubmitHandler<LoginFormInput> = ({ email, password }) => {
		singIn({ email, password });
	};

	return {
		error,
		errors,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
	};
};

export interface LoginFormInput {
	email: string;
	password: string;
}
