import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Statusbar.css';

export default function Statusbar() {
  const res = useSelector((state: any) => state.taskControllerReducer);

  let taskStatus;

  if (res.execute) {
    if (res.paused) {
      taskStatus = <span>Task Paused</span>;
    } else {
      taskStatus = <span>Task Running</span>;
    }
  } else {
    taskStatus = <span>Task Stopped</span>;
  }

  return (
    <div className={styles.container} data-tid="container">
      <span>status: </span>
      {taskStatus}
    </div>
  );
}
