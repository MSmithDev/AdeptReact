import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Pendant.css';
import routes from '../constants/routes.json';

export default function Pendant() {
  const res = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.container} data-tid="container">
      <h1>
        Pendant main page
        {res.id}
        {res.something}
      </h1>
      <button onClick={() => dispatch({ type: 'ADDTASK' })} type="button">
        add task
      </button>
      <Link to={routes.HOME}>Lock</Link>
    </div>
  );
}
