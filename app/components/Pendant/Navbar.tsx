import React from 'react';
import styles from './Navbar.css';
import routes from '../../constants/routes.json';
import LinkButton from '../LinkButton';

export default function Navbar() {
  return (
    <div className={styles.container} data-tid="container">
      <LinkButton className={styles.btn} to={routes.PENDANT}>
        {' '}
        <i className="fas fa-home btn" />
      </LinkButton>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-cogs" />
      </button>
      <LinkButton className={styles.btn} to={routes.PROGRAM}>
        {' '}
        <i className="fas fa-code btn" />
      </LinkButton>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-heartbeat" />
      </button>
      <button className={styles.btn} data-tclass="btn" type="button">
        <i className="fas fa-server" />
      </button>
      <LinkButton className={styles.btn} to={routes.HOME}>
        {' '}
        <i className="fas fa-lock btn" />
      </LinkButton>
    </div>
  );
}
