import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './RobotTaskController.css';
import { start, stop, pause } from '../../actions/task';

export default function RobotTaskController() {
  // const res = useSelector(state => state.taskControllerReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch({ type: start })}
        className={styles.startBtn}
        type="button"
      >
        <i className="fas fa-play btn" />
      </button>

      <button
        onClick={() => dispatch({ type: pause })}
        className={styles.startBtn}
        type="button"
      >
        <i className="fas fa-pause btn" />
      </button>

      <button
        onClick={() => dispatch({ type: stop })}
        className={styles.startBtn}
        type="button"
      >
        <i className="fas fa-stop btn" />
      </button>
    </div>
  );
}
