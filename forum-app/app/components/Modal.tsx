import styles from './Modal.module.css';

interface ModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>

      </div>
    </div>
  )
}

export default Modal;