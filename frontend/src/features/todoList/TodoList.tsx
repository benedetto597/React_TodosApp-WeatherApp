import React, { useEffect, useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  update,
  get,
  fetchTodos,
} from './todoListSlice';
import styles from './TodoList.module.css';
import { Task } from './Task';
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
    fetchTodos();
  }, [todos]);
  
  return (
    <div>
      <ul>
        {todos.map(t => <Task key={t.id} todo={t}/>)}
      </ul>
      <div className={styles.row}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        <button onClick={() => dispatch(add({ 
          id, 
          title, 
          description, 
          completed,
          }))}>➕</button>
      </div>
    </div>
  );
}
