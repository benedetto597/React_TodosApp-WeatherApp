import * as React from "react";
import styles from '../styles/TodoList.module.css';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const TextArea = ({ error, ...rest }: TextAreaProps) => (
  <div>
    <textarea {...rest} placeholder="Description" className={styles.textarea}/>
    {error && <div className={styles.errorInput}>{error}</div>}
  </div>
);
export default TextArea