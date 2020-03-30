import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pendant.css';
import routes from '../constants/routes.json';

export default function Pendant() {
  return (
    <div className={styles.container} data-tid="containe2r">
      <h1>Pendant main page</h1>
      <Link to={routes.HOME}>Lock</Link>
    </div>
  );
}
