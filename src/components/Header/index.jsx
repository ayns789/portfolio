import styles from './index.module.css';
// import React, { useEffect } from 'react';
import { FiMail } from 'react-icons/fi';

const Header = () => {
  let alpha = ['A', 'J', 'l', 'n', 'o', 's', 'y'];
  return (
    <>
      <div className={styles.contentHeader}>
        <div className={styles.background}>
          <div className={styles.contentUnder}>
            <div className={`${styles.contentUnderFront} ${styles.face}`}>
              <h2 id='JA'>
                {`${alpha[1]}${alpha[4]}${alpha[2]}${alpha[6]}`}{' '}
                {`${alpha[0]}${alpha[3]}${alpha[5]}${alpha[6]}`}
              </h2>

              <p>Développeur web</p>
            </div>
            <div className={`${styles.contentUnderBack} ${styles.face}`}>
              <h2>Contact</h2>
              <p className={styles.contentIcnMail}>
                <a href='mailto:joly.a.idf@gmail.com'>
                  <FiMail className={styles.icnMail} />
                </a>
              </p>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.bandeColorDegradeTop}></div>
        <div className={styles.bandeColorDegradeBottom}></div>
        <div className={styles.bandeColorDegradeDown}></div>
      </div>
    </>
  );
};

export default Header;
