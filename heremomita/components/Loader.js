import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
    <div className={styles.loader}>
        <div className={`${styles.face1} ${styles.face}`}>
            <div className={styles.circle}>
                 {/* where */}
            </div>
        </div>
        <div className={`${styles.face2} ${styles.face}`}>
            <div className={styles.circle}>
                 {/* what */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Loader
