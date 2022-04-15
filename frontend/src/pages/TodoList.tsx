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

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(get);
  const [id, setId] = useState(uuid());
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [completed, setCompleted] = useState(false);

  // UseEffect to set todos
  useEffect(() => {
    dispatch(fetchTodos());
    
  }, []);
  
  return (
    <div>
      <div className={styles.row} id="tasks">
        <div className={styles.contaiter}>
          <h2 className={styles.h2}>New Task</h2>
          <div className={styles.row}>
            <input className={styles.textbox} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={styles.row}>
            <textarea className={styles.textarea} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className={styles.row}>
            <h3 className={styles.h3}>Completed</h3>
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            <h3 className={styles.h3}>Add Task</h3>
            <button className={styles.button} onClick={() => dispatch(add({ 
              id, 
              title, 
              description, 
              completed,
            }))}>+</button>
          </div>
        </div>
        <div className={styles.contaiter}>
          <ul>
            {todos.map(t => <Task key={t.id} todo={t}/>)}
          </ul>
        </div>
      </div>
    </div>
    
  );
}
