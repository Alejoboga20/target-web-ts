import useTranslation from 'hooks/useTranslation';
import { TwoSidesLayout } from '../../Layout/TwoSidesLayout/TwoSidesLayout';

export const SigninPage = () => {
	const t = useTranslation();

	return <TwoSidesLayout leftElement={<p>{t('global.pageTitle')}</p>} />;
};
