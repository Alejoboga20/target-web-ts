import { TwoSidesLayout } from '../../Layout/TwoSidesLayout/TwoSidesLayout';
import { Login } from 'components';
import useTranslation from 'hooks/useTranslation';

export const SigninPage = () => {
	const t = useTranslation();

	return <TwoSidesLayout leftElement={<Login />} />;
};
