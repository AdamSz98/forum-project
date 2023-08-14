import styles from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useStore } from '../../lib/store';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children
}) => {
  const setModalOpen = useStore((store: any) => store.setModalOpen);
  const isOpen = useStore((store: any) => store.modalOpen);

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