import styles from './Input.module.css';
interface InputProps {
  label: string;
  type?: string;
}


const Input: React.FC<InputProps> = ({
  label,
  type
}) => {
  return (
    <div className={styles.formControl}>
      <label className={styles.label}>{label}</label>
      <input 
        className={styles.input}
        type={type}
      />
    </div>
  )
}

export default Input;