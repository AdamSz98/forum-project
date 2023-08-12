import styles from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <AiOutlineClose className={styles.close} />
        </div>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;