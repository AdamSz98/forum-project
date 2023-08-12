import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  type?: string;
  register?: UseFormRegister<any>;
  name?: string;
}


const Input: React.FC<InputProps> = ({
  label,
  type,
  register,
  name
}) => {

  return (
    <div className={styles.formControl}>
      {register && name ? 
        (
          <input 
            className={styles.input}
            type={type}
            placeholder=""
            {...register(name)}
          />
        ) : (
          <input 
            className={styles.input}
            type={type}
            placeholder=""
          />
        )
      }
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Input;