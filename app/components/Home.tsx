import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h1>AdeptReact Pendant</h1>
      <Link to={routes.PENDANT}>Unlock</Link>
    </div>
  );
}
