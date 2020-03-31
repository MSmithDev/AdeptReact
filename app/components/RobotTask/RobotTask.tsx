import React from 'react';
import styles from './RobotTask.css';

export default function RobotTask(props) {

  return (
    <div className={styles.container}>
      <span>task id = {props.id}</span>
      <br></br>
      <span>task type = {props.type}</span>

    </div>
  );
}
