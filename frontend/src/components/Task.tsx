import { useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../types/todo";
import { remove, update } from "../utils/todoListAPI";
import styles from '../styles/TodoList.module.css';

type Props = {
    todo: Todo;
}

export function Task({todo}: Props) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);
    const dispatch = useDispatch();
    const updateTodo = () => dispatch(update({
    id: todo.id, title, description, completed
}));

    return (
        <div className={styles.row}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input> 
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)}></input>
            <button onClick={updateTodo}>✔️</button>
            <button onClick={() => dispatch(remove(todo))}>❌</button>
        </div>
    )
}