import * as React from "react";
import styles from '../styles/TodoList.module.css';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, ...rest }: InputProps) => (
  <div>
    <input {...rest} placeholder="Title" className={styles.textbox}/>
    {error && <div className={styles.errorInput}>{error}</div>}
  </div>
);
export default Input