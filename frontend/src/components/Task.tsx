import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../types/todo";
import { remove, update } from "../utils/todoListAPI";
import styles from '../styles/TodoList.module.css';
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";

type Props = {
    todo: Todo;
}

export function Task({todo}: Props) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);
    const [error, setError] = useState(todo.error);
    const dispatch = useDispatch();
    const updateTodo = () => dispatch(update({
    id: todo.id, title, description, completed
}));

    const ChangeHandlerTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError('');
      setTitle(e.target.value);
    };

    const ChangeHandlerDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setError('');
      setDescription(e.target.value);
    };  

    const ResetFields = () => {
      setTitle('');
      setDescription('');
      setCompleted(false);
    };  

    const SubmitHandler = () => {
        updateTodo();
    };  

    return (
        <div className={styles.task}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <TitleInput
                            value={title}
                            onChange={ChangeHandlerTitle}
                            error={error}
                        />
                    </div>
                    <div className={styles.row}>
                        <h3 className={styles.h3}>Completed</h3>
                        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)}></input>
                        <button className={styles.button} onClick={SubmitHandler}>✔</button>
                        <button className={styles.button} onClick={() => dispatch(remove(todo))}>✖</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <DescriptionInput
                        value={description}
                        onChange={ChangeHandlerDesc}
                    />
                </div>
            </div>
            <div className={styles.hr}></div>
        </div>
    )
}