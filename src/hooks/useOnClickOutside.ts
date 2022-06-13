import { useEffect } from 'react';

export const useOnClickOutside = (
	ref: React.MutableRefObject<HTMLDivElement | null>,
	handler: handler
) => {
	useEffect(() => {
		const handleClickOutside = () => {
			if (ref.current) {
				handler(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, handler]);
};

type handler = (isOpen: boolean) => void;
