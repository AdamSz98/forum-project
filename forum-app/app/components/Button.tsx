import styles from './Button.module.css';

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disabled,
  onClick
}) => {
  return (
    <button 
      type={type} 
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;