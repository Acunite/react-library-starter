import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

function Button({ disabled = false, onClick, children }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

export default Button;
