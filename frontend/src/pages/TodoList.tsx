import React, { useEffect, useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  get,
  fetchTodos,
} from '../utils/todoListAPI';
import styles from '../styles/TodoList.module.css';
import { Task } from '../components/Task';
import { v4 as uuid } from 'uuid';
import { error } from 'console';
import TitleInput from '../components/TitleInput';
import DescriptionInput from '../components/DescriptionInput';
import { setTextRange } from 'typescript';

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(get);
  const [id, setId] = useState(uuid());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');

  // UseEffect to set todos
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

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
    if (!AllFieldsFilled()) { 
      setError('All fields must be filled with 4 characters or more');
    }else{
      dispatch(add({
        id,
        title,
        description,
        completed,
      }));
      ResetFields();
    }
  }; 

  const AllFieldsFilled = () => {
    if (title.length > 4 && title.length < 50 && description.length > 4 && description.length < 255) {
      return true;
    } 
    return false;
  };
  
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.contaiter}>
          <h2 className={styles.h2}>New Task</h2>
          <div className={styles.row}>
            <TitleInput
                value={title}
                onChange={ChangeHandlerTitle}
                error={error}
                />
          </div>
          <div className={styles.row}>
            <DescriptionInput
                value={description}
                onChange={ChangeHandlerDesc}
            />
          </div>
          <div className={styles.row}>
            <h3 className={styles.h3}>Completed</h3>
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            <h3 className={styles.h3}>Add Task</h3>
            <button className={styles.button} onClick={() => SubmitHandler()}>+</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>{todos.map(t => <Task key={t.id} todo={t}/>)}</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}
