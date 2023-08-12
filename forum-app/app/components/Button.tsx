import styles from './Button.module.css';

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: any;
  customClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disabled,
  onClick,
  customClass
}) => {
  return (
    <button 
      type={type} 
      disabled={disabled}
      className={!customClass ? styles.button : styles[customClass]}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;