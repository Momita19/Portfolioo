// Opening.js
import React from 'react';
import styles from './Opening.module.css';

const Opening = ({ showCurtains }) => {
  return (
    <div className={styles.container}>
      <div className={styles.curtainContainer}>
        {showCurtains && (
          <>
            <div className={`${styles.curtainLeft} ${showCurtains ? styles.open : ''}`}></div>
            <div className={`${styles.curtainRight} ${showCurtains ? styles.open : ''}`}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Opening;
