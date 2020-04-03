import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Pendant.css';
import routes from '../constants/routes.json';
import { StateType } from '../reducers/types';

export default function Pendant() {
  const res = useSelector((state: StateType) => state.taskReducer);
  const robotState = useSelector((state: StateType) => state.robotState);
  // const dispatch = useDispatch();
  return (
    <div className={styles.container} data-tid="container">
      <h1>
        Pendant main page
        {res.id}
        {res.something}
      </h1>
      <h2>
        Robot X:
        {robotState.robotPosition.x}
      </h2>
      <h2>
        Robot Y:
        {robotState.robotPosition.y}
      </h2>
      <h2>
        Robot Z:
        {robotState.robotPosition.z}
      </h2>
      <h2>
        Robot R:
        {robotState.robotPosition.r}
      </h2>
      <Link to={routes.HOME}>Lock</Link>
    </div>
  );
}
