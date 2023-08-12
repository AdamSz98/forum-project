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
      <input 
        className={styles.input}
        type={type}
        placeholder=""
      />
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Input;