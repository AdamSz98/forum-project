import styles from './Button.module.css';

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type
}) => {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  )
}

export default Button;