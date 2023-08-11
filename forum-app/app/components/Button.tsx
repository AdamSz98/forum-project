import styles from './Button.module.css';

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disabled
}) => {
  return (
    <button 
      type={type} 
      disabled={disabled}
      className={styles.button}
    >
      {label}
    </button>
  )
}

export default Button;