import React from 'react';
import { useSelector } from 'react-redux';
import styles from './RobotTaskContainer.css';
import RobotTask from './RobotTask';
import { StateType } from '../../reducers/types';

export default function RobotTaskContainer() {
  const res = useSelector((state: StateType) => state.taskReducer);

  return (
    <div className={styles.container}>
      {res.map((items: { id: number; type: string }) => (
        <RobotTask key={items.id} id={items.id} type={items.type} />
      ))}
    </div>
  );
}
