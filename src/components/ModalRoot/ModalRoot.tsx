import ReactDOM from 'react-dom';
import styles from './ModalRoot.module.scss';

const modalRoot = document.getElementById('root')!;

export const ModalRoot = ({ children }: ModalRootProps) => {
	return ReactDOM.createPortal(<div className={styles.modal}>{children}</div>, modalRoot);
};

interface ModalRootProps {
	children: JSX.Element | JSX.Element[];
}
