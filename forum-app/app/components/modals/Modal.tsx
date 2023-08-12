import styles from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useStore } from '../../lib/store';

interface ModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children
}) => {
  const setModalOpen = useStore((store: any) => store.setModalOpen);

  if(isOpen) {
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <AiOutlineClose 
              className={styles.close}
              onClick={setModalOpen}
            />
          </div>
          <div className={styles.container}>
            {children}
          </div>
        </div>
      </div>
    )
  } else {
    return;
  }
}

export default Modal;