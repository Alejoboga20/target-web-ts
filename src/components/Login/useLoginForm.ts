import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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

	const onSubmit: SubmitHandler<LoginFormInput> = (loginData) => {
		/* TODO: Implement API Call */
		console.log(loginData);
	};

	return {
		errors,
		handleSubmit,
		onSubmit,
		register,
	};
};

interface LoginFormInput {
	email: string;
	password: string;
}
