import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './RobotTaskContainer.css';
import RobotTask from './RobotTask';

export default function RobotTaskContainer() {

  const res = useSelector(state => state.taskReducer);

  return (
    <div className={styles.container}>
      {res.map((items: { id: number; type: string }) => (
        <RobotTask key={items.id} id={items.id} type={items.type} />
      ))}
    </div>
  );
}
