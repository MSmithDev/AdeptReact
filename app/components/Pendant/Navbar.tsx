import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';
import routes from '../../constants/routes.json';
import LinkButton from '../LinkButton';

export default function Navbar() {
  return (
    <div className={styles.container} data-tid="container">
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-home" />
      </button>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-cogs" />
      </button>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-code" />
      </button>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-heartbeat" />
      </button>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-heartbeat" />
      </button>
      <LinkButton className={styles.btn} to={routes.HOME}>
        {' '}
        <i className="fas fa-lock btn" />
      </LinkButton>
    </div>
  );
}
