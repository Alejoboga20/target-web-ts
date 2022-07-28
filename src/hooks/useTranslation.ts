import { useIntl } from 'react-intl';

export const useTranslation = () => {
	const intl = useIntl();

	return (message: string) => intl.formatMessage({ id: message });
};

export default useTranslation;
